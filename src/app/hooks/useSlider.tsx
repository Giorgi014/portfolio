"use client";

import { UseSliderProps, UseSliderReturn } from "@/components/type";
import { CSSProperties, useState } from "react";

export const useSlider = ({
  itemsLength,
  initialIndex = 0,
  translateX = 400,
  scale = 0.9,
  rotateY = 50,
}: UseSliderProps): UseSliderReturn => {
  const [currentIndex, setCurrentIndex] = useState<number>(initialIndex);

  const safeIndex = currentIndex >= itemsLength ? 0 : currentIndex;

  const nextSlide = () => {
    if (itemsLength === 0) return;
    setCurrentIndex((prev) => (prev + 1) % itemsLength);
  };

  const prevSlide = () => {
    if (itemsLength === 0) return;
    setCurrentIndex((prev) => (prev - 1 + itemsLength) % itemsLength);
  };

  const getCardStyle = (index: number): CSSProperties => {
    if (itemsLength === 0) {
      return { opacity: 0, pointerEvents: "none" };
    }

    const diff = (index - safeIndex + itemsLength) % itemsLength;

    if (diff === 0) {
      return {
        transform: "translateX(0) scale(1) rotateY(0deg)",
        zIndex: 30,
        opacity: 1,
        filter: "brightness(1)",
      };
    }

    if (diff === 1) {
      return {
        transform: `translateX(${translateX}px) scale(${scale}) rotateY(${rotateY}deg)`,
        zIndex: 20,
        opacity: 0.6,
        filter: "brightness(0.6)",
      };
    }

    if (diff === itemsLength - 1) {
      return {
        transform: `translateX(-${translateX}px) scale(${scale}) rotateY(-${rotateY}deg)`,
        zIndex: 20,
        opacity: 0.6,
        filter: "brightness(0.6)",
      };
    }

    return {
      transform: "translateX(0) scale(0.8)",
      opacity: 0,
      pointerEvents: "none",
      zIndex: 0,
    };
  };

  const getHeadStyle = (index: number): CSSProperties => {
    if (itemsLength === 0) {
      return { opacity: 0, pointerEvents: "none" };
    }

    const diff = (index - safeIndex + itemsLength) % itemsLength;

    if (diff === 0) {
      return {
        transform: "translateX(-50%) scale(1) rotateY(0deg)",
        zIndex: 30,
        opacity: 1,
        filter: "brightness(1)",
      };
    }

    if (diff === 1) {
      return {
        transform: `translateX(calc(-50% + ${translateX}px)) scale(${scale}) rotateY(${rotateY}deg)`,
        zIndex: 20,
        opacity: 0.6,
        filter: "brightness(0.6)",
      };
    }

    if (diff === itemsLength - 1) {
      return {
        transform: `translateX(calc(-50% - ${translateX}px)) scale(${scale}) rotateY(-${rotateY}deg)`,
        zIndex: 20,
        opacity: 0.6,
        filter: "brightness(0.6)",
      };
    }

    return {
      transform: "translateX(-50%) scale(0.8)",
      opacity: 0,
      pointerEvents: "none",
      zIndex: 0,
    };
  };

  return {
    currentIndex,
    safeIndex,
    nextSlide,
    prevSlide,
    getCardStyle,
    getHeadStyle,
  };
};
