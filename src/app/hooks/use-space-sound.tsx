"use client";

import { createContext, useContext, useRef, useState, useEffect } from "react";

interface AudioContextType {
  isPlaying: boolean;
  volume: number;
  toggle: () => void;
  toggleMute: () => void;
  setVolume: (v: number) => void;
}

const AudioCtx = createContext<AudioContextType | null>(null);

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

export const SpaceAudioProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const gainRef = useRef<GainNode | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [volume, setVolumeState] = useState<number>(getInitialVolume);

  const lastNonZeroVolume = useRef<number>(getLastNonZeroVolume());

  useEffect(() => {
    const audio = new Audio("/sound/space-sound.mp3");
    audio.loop = true;

    const audioCtx = new AudioContext();
    const source = audioCtx.createMediaElementSource(audio);
    const gainNode = audioCtx.createGain();

    gainNode.gain.value = 1;

    source.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    audio.volume = volume / 100;
    audioRef.current = audio;
    gainRef.current = gainNode;

    return () => {
      audio.pause();
      audioCtx.close();
    };
  }, []);

  useEffect(() => {
    if (volume > 0) {
      lastNonZeroVolume.current = volume;
      localStorage.setItem(LAST_VOLUME_KEY, String(volume));
    }
    localStorage.setItem(VOLUME_KEY, String(volume));
  }, [volume]);

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
    if (audioRef.current) audioRef.current.volume = v / 100;
  };

  const toggleMute = () => {
    if (volume === 0) {
      setVolume(lastNonZeroVolume.current || 50);
      if (!isPlaying) {
        audioRef.current?.play();
        setIsPlaying(true);
      }
    } else {
      setVolume(0);
      audioRef.current?.pause();
      setIsPlaying(false);
    }
  };

  return (
    <AudioCtx.Provider
      value={{ isPlaying, volume, toggle, toggleMute, setVolume }}
    >
      {children}
    </AudioCtx.Provider>
  );
};

export const useSpaceAudio = () => useContext(AudioCtx)!;
