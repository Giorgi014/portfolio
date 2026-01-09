"use client";

import React, { useState } from "react";
import SoundToggle from "./SoundToggle";
import { Container } from "./container";
import { RiCloseLargeFill } from "react-icons/ri";
import { useToggleAnimation } from "@/app/hooks/containerAnimation";
import { Range } from "./range";
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
          <h2 className="sound_settings_head">Sound Setting</h2>
          <Range id="volume">Volume</Range>
        </Container>
      )}
      <section className="sound_option" onClick={toggleSound}>
        <SoundToggle isOn={!turnOff} className="sound_icon" />
      </section>
    </article>
  );
};
