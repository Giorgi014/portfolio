"use client";

import React, { useState } from "react";
import SoundToggle from "./SoundToggle";
import { Container } from "./container";
import { RiCloseLargeFill } from "react-icons/ri";
import { useToggleAnimation } from "@/app/hooks/containerAnimation";
import "./style/sound.scss";

export const SoundSettings = () => {
  const [turnOff, setTurnOff] = useState<boolean>(false);
  const { open, isClosing, openModal, closeModal, handleAnimationEnd } =
    useToggleAnimation();

  const toggleSound = (e: React.MouseEvent) => {
    e.stopPropagation();
    setTurnOff(!turnOff);
  };

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
          <input type="range" name="volume" id="volume" className="volume" />
        </Container>
      )}
      <section className="sound_option" onClick={toggleSound}>
        <SoundToggle isOn={!turnOff} className="sound_icon" />
      </section>
    </article>
  );
};
