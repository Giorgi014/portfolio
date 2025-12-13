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
};

// Active Section type
export type ActiveSection = "about" | "projects" | "contact" | null;

// Section type props
export type SectionProps = {
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
  onAnimationEnd: () => void;
};
