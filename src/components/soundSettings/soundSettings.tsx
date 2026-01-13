"use client";

import React, { useEffect, useRef, useState } from "react";
import SoundToggle from "../SoundToggle";
import { Container } from "@/components";
import { RiCloseLargeFill } from "react-icons/ri";
import { useToggleAnimation } from "@/app/hooks/containerAnimation";
import { Range } from "../range";
import gsap from "gsap";
import "./style/sound.scss";

export const SoundSettings = () => {
  const [turnOff, setTurnOff] = useState<boolean>(false);
  const { open, isClosing, openModal, closeModal, handleAnimationEnd } =
    useToggleAnimation();

  const toggleSound = (e: React.MouseEvent) => {
    e.stopPropagation();
    setTurnOff(!turnOff);
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
          <Range ref={rangeRef} id="volume">
            Volume
          </Range>
        </Container>
      )}
      <section className="sound_option" onClick={toggleSound}>
        <SoundToggle isOn={!turnOff} className="sound_icon" />
      </section>
    </article>
  );
};
