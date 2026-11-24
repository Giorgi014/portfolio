import type { IconProps } from "@/types";

export const RightRowIcon = ({
  size = 20,
  color = "currentColor",
  style,
  ...props
}: IconProps) => {
  return (
    <svg
      stroke={color}
      fill={color}
      viewBox="0 0 16 16"
      height={size}
      width={size}
      style={style}
      {...props}
    >
      <path d="M18 8L22 12L18 16"></path>
      <path d="M2 12H22"></path>
    </svg>
  );
};
