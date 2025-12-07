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
