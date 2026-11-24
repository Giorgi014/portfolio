import type { IconProps } from "@/types";

export const FramerIcon = ({
  size = 200,
  color = "currentColor",
  style,
  ...props
}: IconProps) => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    height={size}
    width={size}
    style={style}
    stroke={color}
    fill={color}
    {...props}
  >
    <path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z" />
  </svg>
);
