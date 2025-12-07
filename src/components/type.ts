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
};

export type ButtonProps = {
  className: string;
  children: React.ReactNode;
  onClick: () => void;
};

export type ContainerProps = {
  className: string;
  children: React.ReactNode;
};

export type ActiveSection = "about" | "projects" | "contact" | null;

export type SectionProps = {
  isOpen: boolean;
  onToggle: () => void;
};
