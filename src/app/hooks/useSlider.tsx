"use client";

import { UseSliderProps, UseSliderReturn } from "@/components/type";
import { CSSProperties, useCallback, useRef, useState } from "react";

export const useSlider = ({
  itemsLength,
  initialIndex = 0,
  translateX = 400,
  scale = 0.9,
  rotateY = 50,
}: UseSliderProps): UseSliderReturn => {
  const [currentIndex, setCurrentIndex] = useState<number>(initialIndex);

  const safeIndex = currentIndex >= itemsLength ? 0 : currentIndex;

  const nextSlide = useCallback(() => {
    if (itemsLength === 0) return;
    setCurrentIndex((prev) => (prev + 1) % itemsLength);
  }, [itemsLength]);

  const prevSlide = useCallback(() => {
    if (itemsLength === 0) return;
    setCurrentIndex((prev) => (prev - 1 + itemsLength) % itemsLength);
  }, [itemsLength]);

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

  const touchStartX = useRef<number>(0);
  const wheelTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const onTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  }, []);

  const onTouchEnd = useCallback(
    (e: React.TouchEvent) => {
      const deltaX = e.changedTouches[0].clientX - touchStartX.current;
      const threshold = 50;
      if (deltaX > threshold) prevSlide();
      else if (deltaX < -threshold) nextSlide();
    },
    [nextSlide, prevSlide]
  );

  const onWheel = useCallback(
    (e: React.WheelEvent) => {
      if (wheelTimeout.current) return;
      const delta =
        Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
      if (Math.abs(delta) < 30) return;
      if (delta > 0) nextSlide();
      else prevSlide();
      wheelTimeout.current = setTimeout(() => {
        wheelTimeout.current = null;
      }, 1000);
    },
    [nextSlide, prevSlide]
  );

  const sliderHandlers = { onTouchStart, onTouchEnd, onWheel };

  return {
    currentIndex,
    safeIndex,
    nextSlide,
    prevSlide,
    getCardStyle,
    getHeadStyle,
    sliderHandlers,
  };
};
