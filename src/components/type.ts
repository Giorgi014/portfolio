import { RefObject } from "react";

// Particle Type
export type ParticleType = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  move: (canvasWidth: number, canvasHeight: number) => void;
  draw: (ctx: CanvasRenderingContext2D) => void;
};

// Hexagon type props
export type HexBgProps = {
  bgColor?: string;
  borderColor?: string;
  className?: string;
  id?: string;
};

// Button type props
export type ButtonProps = {
  className: string;
  children: React.ReactNode;
  onClick: () => void;
};

// Container type props
export type ContainerProps = React.HTMLAttributes<HTMLDivElement> & {
  className?: string;
  children: React.ReactNode;
  variant?: "container" | "profile" | "projects" | "settings";
};

// Active Section type
export type ActiveSection = "about" | "projects" | "contact" | null;

// Section type props
export type SectionProps = {
  isOpen: boolean;
  onToggle: () => void;
};

// Project Types
export type ProjectTypes = {
  id: number;
  url: string;
  src: string;
  urlGitHub: string;
  localUrl: string;
  title: string;
  stack: string;
  translationKey?: string;
  category: string;
};

// Main Props
export type MainProps = {
  onProjectsToggle?: (isOpen: boolean) => void;
};

// Sound Off Props
export type SoundOffProps = {
  width?: number | string;
  height?: number | string;
  fill?: string;
  className?: string;
  onClick?: () => void;
};

// Sound On Props
export type SoundOnProps = {
  width?: number | string;
  height?: number | string;
  fill?: string;
  className?: string;
  onClick?: () => void;
};

// Sound Toggle Props
export type SoundToggleProps = {
  isOn: boolean;
  width?: number | string;
  height?: number | string;
  fill?: string;
  className?: string;
  volume: number;
  onClick?: () => void;
};

// Use Toogle Animation Props
export type UseToggleAnimationProps = {
  isOpen?: boolean;
  onToggle?: () => void;
};

// Use Toggle Animation Return
export type UseToggleAnimationReturn = {
  isOpen: boolean;
  isClosing: boolean;
  open: boolean;
  openModal: () => void;
  closeModal: () => void;
  toggleModal: () => void;
  handleAnimationEnd: () => void;
};

// Range Props
export type RangeProps = {
  children: React.ReactNode;
  id: string;
  value: number;
  ref: RefObject<HTMLElement | null>;
  onChangeValue: (value: number) => void;
};

// Use Slider Props
export type UseSliderProps = {
  itemsLength: number;
  initialIndex?: number;
  translateX?: number;
  scale?: number;
  rotateY?: number;
};

// Use Slider Return
export type UseSliderReturn = {
  currentIndex: number;
  safeIndex: number;
  nextSlide: () => void;
  prevSlide: () => void;
  getCardStyle: (index: number) => React.CSSProperties;
};

// Categories Navigation Type
export type categoriesNavigationType = {
  id: number;
  className: string;
  category: string;
  translationKey: string;
};
