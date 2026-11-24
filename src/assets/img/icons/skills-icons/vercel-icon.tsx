import type { IconProps } from "@/types";

export const VercelIcon = ({
  size = 200,
  color = "currentColor",
  style,
  ...props
}: IconProps) => (
  <svg
    viewBox="0 0 512 512"
    height={size}
    width={size}
    style={style}
    stroke={color}
    fill={color}
    {...props}
  >
    <path fillRule="evenodd" d="m256 48 240 416H16z" />
  </svg>
);
