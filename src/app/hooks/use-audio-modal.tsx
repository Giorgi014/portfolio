"use client";

import { createContext, useContext, useState } from "react";

type AudioModalContextType = {
  isOpen: boolean;
  toggle: () => void;
  close: () => void;
};

const AudioModalContext = createContext<AudioModalContextType | null>(null);

export const AudioModalProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen((prev) => !prev);
  const close = () => setIsOpen(false);

  return (
    <AudioModalContext.Provider value={{ isOpen, toggle, close }}>
      {children}
    </AudioModalContext.Provider>
  );
};

export const useAudioModal = () => {
  const ctx = useContext(AudioModalContext);
  if (!ctx)
    throw new Error("useAudioModal must be used within AudioModalProvider");
  return ctx;
};
