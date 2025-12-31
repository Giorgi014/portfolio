"use client";

import { useState } from "react";
import SoundToggle from "./SoundToggle";
import "./style/sound.scss";

export const SoundSettings = () => {
  const [turnOff, setTurnOff] = useState<boolean>(false);

  const toggleSound = () => {
    setTurnOff(!turnOff);
  };

  return (
    <div className="sound" onClick={toggleSound}>
      <p className="sound_settings">Sound</p>
      <div className="sound_option">
        <SoundToggle isOn={!turnOff} className="sound_icon" />
      </div>
    </div>
  );
};
