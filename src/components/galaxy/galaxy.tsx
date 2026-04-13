"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { mergeGeometries } from "three/examples/jsm/utils/BufferGeometryUtils.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import geoData from "../../assets/img/custom.geo.json";

// a_timeOffset is a per-vertex attribute baked into the merged geometry so
// every dot twinkles at its own phase with a single material and 1 draw call.
const vertex = `
  #ifdef GL_ES
  precision mediump float;
  #endif
  uniform float u_time;
  uniform float u_maxExtrusion;
  attribute float a_timeOffset;
  varying float v_timeOffset;
  void main() {
    v_timeOffset = a_timeOffset;
    vec3 newPosition = position;
    if(u_maxExtrusion > 1.0) newPosition.xyz = newPosition.xyz * u_maxExtrusion + sin(u_time + a_timeOffset);
    else newPosition.xyz = newPosition.xyz * u_maxExtrusion;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
  }
`;

const fragment = `
  #ifdef GL_ES
  precision mediump float;
  #endif
  uniform float u_time;
  varying float v_timeOffset;
  vec3 colorA = vec3(0.0, 0.949, 1.0);
  vec3 colorB = vec3(0.0, 0.302, 0.302);
  void main() {
    vec3  color = vec3(0.0);
    float pct   = abs(sin(u_time + v_timeOffset));
          color = mix(colorA, colorB, pct);
    gl_FragColor = vec4(color, 1.0);
  }
`;

export const Galaxy = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // ─── Renderer / Scene / Camera ───────────────────────────────────────────
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000,
    );
    camera.position.z = window.innerWidth > 700 ? 5 : 7;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);

    // ─── Lights ──────────────────────────────────────────────────────────────
    const pointLight = new THREE.PointLight(0x081b26, 17, 200);
    pointLight.position.set(-2.5, 0, 3);
    scene.add(pointLight);
    scene.add(new THREE.HemisphereLight(0xffffbb, 0x080820, 1.5));

    // ─── Controls ────────────────────────────────────────────────────────────
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.autoRotate = true;
    controls.autoRotateSpeed = 1.2;
    controls.enableDamping = true;
    controls.enablePan = false;
    controls.enableZoom = false;
    controls.minPolarAngle = Math.PI / 2 - 0.5;
    controls.maxPolarAngle = Math.PI / 2 + 0.5;

    // ─── Orbital mechanics ────────────────────────────────────────────────────
    interface Orbital {
      r: number;
      inc: number;
      raan: number;
      speed: number;
      angle: number;
    }

    // Kepler's 3rd law: ω ∝ r^(-3/2), normalized to LEO base speed
    const BASE_SPEED = 0.005;
    const kSpeed = (r: number) => BASE_SPEED * Math.pow(2.5 / r, 1.5);

    // 3D position from orbital elements (circular orbit)
    const orbPos = (o: Orbital): [number, number, number] => {
      const x0 = o.r * Math.cos(o.angle);
      const z0 = o.r * Math.sin(o.angle);
      const cosI = Math.cos(o.inc),
        sinI = Math.sin(o.inc);
      const x1 = x0,
        y1 = -z0 * sinI,
        z1 = z0 * cosI;
      const cosR = Math.cos(o.raan),
        sinR = Math.sin(o.raan);
      return [x1 * cosR + z1 * sinR, y1, -x1 * sinR + z1 * cosR];
    };

    // LEO — 50 objects (Starlink-like), 160–2000 km, various inclinations
    const leoOrbs: Orbital[] = Array.from({ length: 50 }, () => {
      const r = 2.5 + Math.random() * 0.3;
      return {
        r,
        inc: Math.random() * 97 * (Math.PI / 180),
        raan: Math.random() * Math.PI * 2,
        speed: kSpeed(r),
        angle: Math.random() * Math.PI * 2,
      };
    });

    // MEO — GPS constellation, 6 planes × 4 satellites, inc=55°, ~20200 km
    const meoOrbs: Orbital[] = [];
    for (let p = 0; p < 6; p++)
      for (let s = 0; s < 4; s++)
        meoOrbs.push({
          r: 4.2,
          inc: 55 * (Math.PI / 180),
          raan: p * (Math.PI / 3),
          speed: kSpeed(4.2),
          angle: (s * 90 + p * 15) * (Math.PI / 180),
        });

    // GEO — 15 geostationary satellites, equatorial, ~35786 km
    const geoOrbs: Orbital[] = Array.from({ length: 15 }, (_, i) => ({
      r: 6.5,
      inc: 0,
      raan: 0,
      speed: kSpeed(6.5),
      angle: (i * Math.PI * 2) / 15,
    }));

    const makeSprite = (color: string) => {
      const c = document.createElement("canvas");
      c.width = c.height = 32;
      const ctx = c.getContext("2d")!;
      const g = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
      g.addColorStop(0, color);
      g.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.arc(16, 16, 16, 0, Math.PI * 2);
      ctx.fill();
      return new THREE.CanvasTexture(c);
    };

    const makeOrbitPoints = (
      orbs: Orbital[],
      tex: THREE.Texture,
      size: number,
    ) => {
      const positions = new Float32Array(orbs.length * 3);
      orbs.forEach((o, i) => {
        const [x, y, z] = orbPos(o);
        positions[i * 3] = x;
        positions[i * 3 + 1] = y;
        positions[i * 3 + 2] = z;
      });
      const geo = new THREE.BufferGeometry();
      geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
      const mat = new THREE.PointsMaterial({
        map: tex,
        size,
        transparent: true,
        depthWrite: false,
        opacity: 0.9,
      });
      return { points: new THREE.Points(geo, mat), geo, mat };
    };

    const sharedTex = makeSprite("rgba(255,255,255,1)");
    const leoObj = makeOrbitPoints(leoOrbs, sharedTex, 0.06);
    const meoObj = makeOrbitPoints(meoOrbs, sharedTex, 0.08);
    const geoObj = makeOrbitPoints(geoOrbs, sharedTex, 0.07);

    scene.add(leoObj.points);
    scene.add(meoObj.points);
    scene.add(geoObj.points);

    // ─── Globe base sphere ────────────────────────────────────────────────────
    const GLOBE_R = 2;
    const baseSphere = new THREE.SphereGeometry(GLOBE_R, 35, 35);
    const baseMaterial = new THREE.MeshStandardMaterial({
      color: 0x0b2636,
      transparent: true,
      opacity: 0.9,
    });
    const baseMesh = new THREE.Mesh(baseSphere, baseMaterial);

    const globeGroup = new THREE.Group();
    globeGroup.rotation.x = 0 * (Math.PI / 180);
    globeGroup.add(baseMesh);
    scene.add(globeGroup);

    // ─── Geo helpers ──────────────────────────────────────────────────────────
    const twinkleTime = 0.03;

    const calcPos = (lon: number, lat: number) => {
      const phi = (90 - lat) * (Math.PI / 180);
      const theta = (lon + 180) * (Math.PI / 180);
      return new THREE.Vector3(
        -(GLOBE_R * Math.sin(phi) * Math.cos(theta)),
        GLOBE_R * Math.cos(phi),
        GLOBE_R * Math.sin(phi) * Math.sin(theta),
      );
    };

    const pointInRing = (
      lon: number,
      lat: number,
      ring: number[][],
    ): boolean => {
      let inside = false;
      for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
        const xi = ring[i][0],
          yi = ring[i][1];
        const xj = ring[j][0],
          yj = ring[j][1];
        if (
          yi > lat !== yj > lat &&
          lon < ((xj - xi) * (lat - yi)) / (yj - yi) + xi
        )
          inside = !inside;
      }
      return inside;
    };

    type GeoFeature = {
      geometry: { type: string; coordinates: number[][][] | number[][][][] };
    };
    const features = (geoData as { features: GeoFeature[] }).features;

    const isLand = (lon: number, lat: number): boolean =>
      features.some(({ geometry: g }) => {
        if (g.type === "Polygon")
          return pointInRing(lon, lat, (g.coordinates as number[][][])[0]);
        if (g.type === "MultiPolygon")
          return (g.coordinates as number[][][][]).some((poly) =>
            pointInRing(lon, lat, poly[0]),
          );
        return false;
      });

    // ─── Globe dots — merged into 1 geometry, 1 material, 1 draw call ─────────
    // Identical transform logic (lookAt + translate) as before; only difference
    // is that per-dot twinkling phase is a vertex attribute instead of a cloned
    // uniform, so no material iteration is needed in the render loop.
    const dotDensity = 20;
    const dotGeometries: THREE.BufferGeometry[] = [];

    for (let lat = 90; lat > -90; lat -= 2) {
      const radius = Math.cos(Math.abs(lat) * (Math.PI / 180)) * GLOBE_R;
      const dotsForLat = radius * Math.PI * 2 * dotDensity;
      for (let x = 0; x < dotsForLat; x++) {
        const lon = -180 + (x * 360) / dotsForLat;
        if (!isLand(lon, lat)) continue;
        const v = calcPos(lon, lat);
        const raised = v.clone().multiplyScalar(1.005); // slightly above sphere to avoid z-fighting
        const geo = new THREE.CircleGeometry(0.012, 6);
        geo.lookAt(v);
        geo.translate(raised.x, raised.y, raised.z);
        // Bake the random phase into every vertex of this circle.
        const phase = (90 - lat) * Math.sin(Math.random());
        const offsets = new Float32Array(geo.attributes.position.count).fill(
          phase,
        );
        geo.setAttribute("a_timeOffset", new THREE.BufferAttribute(offsets, 1));
        dotGeometries.push(geo);
      }
    }

    const mergedDotGeo = mergeGeometries(dotGeometries);
    // Individual geometries are no longer needed after merging.
    dotGeometries.forEach((g) => g.dispose());

    const dotMaterial = new THREE.ShaderMaterial({
      side: THREE.DoubleSide,
      uniforms: {
        u_time: { value: 1.0 },
        u_maxExtrusion: { value: 1.0 },
      },
      vertexShader: vertex,
      fragmentShader: fragment,
    });

    globeGroup.add(new THREE.Mesh(mergedDotGeo, dotMaterial));

    // ─── Resize ───────────────────────────────────────────────────────────────
    let resizeTimer: ReturnType<typeof setTimeout>;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
        camera.position.z = window.innerWidth > 700 ? 5 : 7;
      }, 150);
    };

    window.addEventListener("resize", handleResize);

    // ─── Render loop — locked to 60 fps ──────────────────────────────────────
    let animId: number;
    let lastTime = 0;
    const FRAME_MS = 1000 / 60; // ~16.67 ms

    const updateOrbitals = (orbs: Orbital[], geo: THREE.BufferGeometry) => {
      const pos = geo.attributes.position as THREE.BufferAttribute;
      orbs.forEach((o, i) => {
        o.angle += o.speed;
        const [x, y, z] = orbPos(o);
        pos.setXYZ(i, x, y, z);
      });
      pos.needsUpdate = true;
    };

    const animate = (time: number) => {
      animId = requestAnimationFrame(animate);
      if (time - lastTime < FRAME_MS) return; // skip frame if too soon
      lastTime = time;
      updateOrbitals(leoOrbs, leoObj.geo);
      updateOrbitals(meoOrbs, meoObj.geo);
      updateOrbitals(geoOrbs, geoObj.geo);
      dotMaterial.uniforms.u_time.value += twinkleTime;
      controls.update();
      renderer.render(scene, camera);
    };
    animate(0);

    return () => {
      cancelAnimationFrame(animId);
      clearTimeout(resizeTimer);
      window.removeEventListener("resize", handleResize);
      mount.removeChild(renderer.domElement);
      renderer.dispose();
      leoObj.geo.dispose();
      leoObj.mat.dispose();
      meoObj.geo.dispose();
      meoObj.mat.dispose();
      geoObj.geo.dispose();
      geoObj.mat.dispose();
      sharedTex.dispose();
      baseSphere.dispose();
      baseMaterial.dispose();
      mergedDotGeo.dispose();
      dotMaterial.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
        pointerEvents: "auto",
      }}
    />
  );
};
