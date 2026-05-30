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
  onClick?: () => void;
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
export type ProjectCategory =
  | "web"
  | "game"
  | "creative"
  | "e-commerce"
  | "utility";

export type CategoryKey = "all" | ProjectCategory;

export type ProjectType = {
  id: number;
  img: StaticImageData;
  project: string;
  key: string;
  category: ProjectCategory;
  technologies: string[];
  src: string;
};

export type CategoryType = {
  id: number;
  category: CategoryKey;
};

export type CategoriesProps = {
  activeCategory: CategoryKey;
  onCategoryChange: (category: CategoryKey) => void;
};
