import { StaticImageData } from "next/image";
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
  variant?: "form" | "link" | "project";
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

// Project Type
export type ProjectCategory = "web" | "game" | "creative" | "platform" | "e-commerce";

export type ProjectType = {
  id: number;
  img: StaticImageData;
  project: string;
  key: string;
  technologies: string[];
};
