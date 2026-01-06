"use client";

import React, { useState } from "react";
import SoundToggle from "./SoundToggle";
import { Container } from "./container";
import "./style/sound.scss";

export const SoundSettings = () => {
  const [turnOff, setTurnOff] = useState<boolean>(false);
  const [showSoundSettingsm, setShowSoundSettings] = useState<boolean>(false);

  const toggleSound = (e: React.MouseEvent) => {
    e.stopPropagation();
    setTurnOff(!turnOff);
  };

  const openSoundSettings = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowSoundSettings(!showSoundSettingsm);
  };

  return (
    <article className="sound" onClick={openSoundSettings}>
      <p className="sound_settings">Sound</p>
      {showSoundSettingsm && (
        <Container variant="settings">
          <input type="range" name="volume" id="volume" className="volume" />
        </Container>
      )}
      <section className="sound_option" onClick={toggleSound}>
        <SoundToggle isOn={!turnOff} className="sound_icon" />
      </section>
    </article>
  );
};
