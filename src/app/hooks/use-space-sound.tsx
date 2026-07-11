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
const PLAYING_KEY = "range:is-playing";

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
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [volume, setVolumeState] = useState<number>(getInitialVolume);
  const lastNonZeroVolume = useRef<number>(getLastNonZeroVolume());

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = volume / 100;

    const wasPlaying = localStorage.getItem(PLAYING_KEY) === "true";
    if (wasPlaying) {
      audio.muted = true;
      audio
        .play()
        .then(() => {
          audio.muted = false;
          setIsPlaying(true);
        })
        .catch(() => {});
    }
  }, []);

  useEffect(() => {
    if (volume > 0) {
      lastNonZeroVolume.current = volume;
      localStorage.setItem(LAST_VOLUME_KEY, String(volume));
    }
    localStorage.setItem(VOLUME_KEY, String(volume));
  }, [volume]);

  useEffect(() => {
    localStorage.setItem(PLAYING_KEY, String(isPlaying));
  }, [isPlaying]);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
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
      <audio
        ref={audioRef}
        src="/sound/space-sound.mp3"
        loop
        style={{ display: "none" }}
      />
      {children}
    </AudioCtx.Provider>
  );
};

export const useSpaceAudio = () => useContext(AudioCtx)!;
