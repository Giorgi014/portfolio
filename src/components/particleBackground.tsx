"use client";

import { ParticleType } from "@/components/type";
import { useEffect, useRef } from "react";

const colors = [
  "#334dff",
  "#333eff",
  "#3334ff",
  "#4433ff",
  "#6633ff",
  "#9933ff",
];

class Particle implements ParticleType {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;

  constructor(canvasWidth: number, canvasHeight: number) {
    this.x = Math.random() * canvasWidth;
    this.y = Math.random() * canvasHeight;
    this.vx = (Math.random() - 0.5) * 1;
    this.vy = (Math.random() - 0.5) * 1;
    this.radius = 2 + Math.random() * 2;
    this.color = colors[Math.floor(Math.random() * colors.length)];
  }

  move(canvasWidth: number, canvasHeight: number) {
    this.x += this.vx;
    this.y += this.vy;
    if (this.x <= 0 || this.x >= canvasWidth) this.vx *= -1;
    if (this.y <= 0 || this.y >= canvasHeight) this.vy *= -1;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
  }
}

const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: ParticleType[] = [];

    const hexToRgba = (hex: string, alpha: number) => {
      const r = parseInt(hex.slice(1, 3), 16);
      const g = parseInt(hex.slice(3, 5), 16);
      const b = parseInt(hex.slice(5, 7), 16);
      return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    };

    const getParticleCount = () => {
      return window.innerWidth < 768 ? 100 : 200;
    };

    let numParticles = getParticleCount();

    for (let i = 0; i < numParticles; i++) {
      particles.push(new Particle(canvas.width, canvas.height));
    }

    const connectParticles = () => {
      for (let i = 0; i < numParticles; i++) {
        for (let j = i + 1; j < numParticles; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            ctx.beginPath();
            const opacity = 1 - dist / 100;
            ctx.strokeStyle = hexToRgba(particles[i].color, opacity);
            ctx.lineWidth = 1;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      if (!canvas || !ctx) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.move(canvas.width, canvas.height);
        p.draw(ctx);
      });
      connectParticles();
      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      if (!canvas) return;

      const oldWidth = canvas.width;
      const oldHeight = canvas.height;

      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      const newCount = getParticleCount();

      if (newCount !== numParticles) {
        numParticles = newCount;
        particles.length = 0;
        for (let i = 0; i < numParticles; i++) {
          particles.push(new Particle(canvas.width, canvas.height));
        }
      } else {
        particles.forEach((p) => {
          p.x = (p.x / oldWidth) * canvas.width;
          p.y = (p.y / oldHeight) * canvas.height;
          p.x = Math.max(0, Math.min(p.x, canvas.width));
          p.y = Math.max(0, Math.min(p.y, canvas.height));
        });
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ position: "absolute", top: 0, left: 0, zIndex: -99 }}
    />
  );
};

export default ParticleBackground;
