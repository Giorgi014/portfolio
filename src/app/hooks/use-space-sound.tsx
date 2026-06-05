"use client";

import { createContext, useContext, useRef, useState, useEffect } from "react";

interface AudioContextType {
  isPlaying: boolean;
  volume: number;
  toggle: () => void;
  setVolume: (v: number) => void;
}

const AudioCtx = createContext<AudioContextType | null>(null);

export const SpaceAudioProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolumeState] = useState(1);

  useEffect(() => {
    audioRef.current = new Audio("/sound/space-sound.mp3");
    audioRef.current.loop = true;
    audioRef.current.volume = volume;

    return () => {
      audioRef.current?.pause();
    };
  }, []);

  const toggle = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying((prev) => !prev);
  };

  const setVolume = (v: number) => {
    setVolumeState(v);
    if (audioRef.current) audioRef.current.volume = v;
  };

  return (
    <AudioCtx.Provider value={{ isPlaying, volume, toggle, setVolume }}>
      {children}
    </AudioCtx.Provider>
  );
};

export const useSpaceAudio = () => useContext(AudioCtx)!;
