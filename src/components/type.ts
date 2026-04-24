import { ComponentProps, ReactNode } from "react";

// HEADER TYPE
export type headerType = {
  id: number;
  key: string;
  href: string;
};

// Button Props
export type buttonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "read_more" | "send";
  children: React.ReactNode;
};

// Icon PROPS
export type IconProps = ComponentProps<"svg"> & {
  size?: number | string;
  color?: string;
};

// Card Props
export type CardProps = ComponentProps<"div"> & {
  children: React.ReactNode;
  className?: string;
};

// Contact Link
export type ContactLink = {
  id: number;
  header: string;
  href: string;
  label: string;
  icon: ReactNode;
};

// Burger Menu Props
export type BurgerMenuProps = {
  isOpen: boolean;
  onToggle: () => void;
};
