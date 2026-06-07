"use client";

import { useSpaceAudio } from "@/app/hooks";
import { AudioToggle } from "./audioToggle";
import { useEffect, useRef, useState } from "react";
import "./style/styles.scss";

export const AudioRange = () => {
  const { volume, setVolume, toggleMute } = useSpaceAudio();
  const rangeRef = useRef<HTMLInputElement>(null);
  const [thumbLeft, setThumbLeft] = useState<number>(0);

  useEffect(() => {
    if (!rangeRef.current) return;
    const { width } = rangeRef.current.getBoundingClientRect();
    const thumbWidth = 30;
    const ratio = volume / 100;
    setThumbLeft(ratio * (width - thumbWidth) + thumbWidth / 2);
  }, [volume]);

  const trackStyle = {
    background: `linear-gradient(
      to right,
      var(--cyber_cyan) ${volume}%,
      var(--cyber_cyan_glow_soft) ${volume}%
    )`,
  };

  return (
    <article className="audio_container">
      <div className="audio_range_wrapper">
        <input
          ref={rangeRef}
          type="range"
          min={0}
          max={100}
          step={1}
          value={volume}
          onChange={(e) => setVolume(Number(e.target.value))}
          className="audio_range"
          style={trackStyle}
        />
        <span className="audio_thumb_label" style={{ left: thumbLeft }}>
          {volume}%
        </span>
      </div>
      <AudioToggle
        isOn={volume > 0}
        className="sound_icon"
        volume={volume}
        onClick={toggleMute}
      />
    </article>
  );
};
