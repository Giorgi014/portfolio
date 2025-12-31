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
    <div className="sound">
      <p>Sound</p>
      <div className="sound_option">
        <SoundToggle isOn={!turnOff} onClick={toggleSound} />
      </div>
    </div>
  );
};
