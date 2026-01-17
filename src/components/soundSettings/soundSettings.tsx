"use client";

import React, { useEffect, useRef, useState } from "react";
import { Container, Range, SoundToggle } from "@/components";
import { RiCloseLargeFill } from "react-icons/ri";
import { useToggleAnimation } from "@/app/hooks/containerAnimation";
import gsap from "gsap";
import "./style/sound.scss";

const VOLUME_KEY = "range:volume";
const LAST_VOLUME_KEY = "range:last-volume";

const getInitialVolume = () => {
  if (typeof window === "undefined") return 50;

  const stored = localStorage.getItem(VOLUME_KEY);
  if (stored === null) return 50;

  const value = Number(stored);
  if (Number.isNaN(value)) return 50;

  return Math.min(100, Math.max(0, value));
};

const getLastNonZeroVolume = () => {
  if (typeof window === "undefined") return 50;

  const stored = localStorage.getItem(LAST_VOLUME_KEY);
  const value = Number(stored);

  return !stored || Number.isNaN(value) || value <= 0 ? 50 : value;
};

export const SoundSettings = () => {
  const [volume, setVolume] = useState<number>(() => getInitialVolume());
  const { open, isClosing, openModal, closeModal, handleAnimationEnd } =
    useToggleAnimation();

  const turnOff = volume === 0;

  const lastNonZeroVolume = useRef<number>(getLastNonZeroVolume());

  useEffect(() => {
    if (volume > 0) {
      lastNonZeroVolume.current = volume;
      localStorage.setItem(LAST_VOLUME_KEY, String(volume));
    }

    localStorage.setItem(VOLUME_KEY, String(volume));
  }, [volume]);

  const toggleSound = (e: React.MouseEvent) => {
    e.stopPropagation();
    setVolume((prev) => {
      if (prev === 0) {
        return lastNonZeroVolume.current || 50;
      }

      return 0;
    });
  };

  const titleRef = useRef<HTMLHeadingElement>(null);
  const rangeRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (open && !isClosing) {
      gsap.set([titleRef.current, rangeRef.current], {
        opacity: 0,
        y: 30,
      });
      const tl = gsap.timeline({
        delay: 0.3,
      });
      tl.to(titleRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
      });
      tl.to(rangeRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
      });
    }

    if (isClosing) {
      const tl = gsap.timeline();

      tl.to(rangeRef.current, {
        opacity: 0,
        y: -20,
        duration: 0.2,
        ease: "power3.in",
      }).to(titleRef.current, {
        opacity: 0,
        y: -20,
        duration: 0.7,
        ease: "power3.in",
      });
    }
  }, [open, isClosing]);

  return (
    <article className="sound" onClick={openModal}>
      <p className="sound_settings">Sound</p>
      {open && (
        <Container
          variant="settings"
          className={isClosing ? "closing" : ""}
          onClick={(e) => e.stopPropagation()}
          onAnimationEnd={handleAnimationEnd}
        >
          <RiCloseLargeFill
            className="close"
            aria-label="Close sound settings"
            onClick={closeModal}
          />
          <h2 ref={titleRef} className="sound_settings_head">
            Sound Setting
          </h2>
          <Range
            ref={rangeRef}
            id="volume"
            value={volume}
            onChangeValue={setVolume}
          >
            Volume
          </Range>
        </Container>
      )}
      <section className="sound_option" onClick={toggleSound}>
        <SoundToggle isOn={!turnOff} className="sound_icon" volume={volume} />
      </section>
    </article>
  );
};
