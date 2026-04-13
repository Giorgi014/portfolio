import { ComponentProps } from "react";

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

// ROW PROPS
export type RowProps = ComponentProps<"svg"> & {
  size?: number | string;
  color?: string;
};
