import type { IconProps } from "@/types";

export const ViteIcon = ({
  size = 200,
  color = "currentColor",
  style,
  ...props
}: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    height={size}
    width={size}
    style={style}
    stroke={color}
    fill="none"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M10 4.5l6-1.5-2 6.5 2-.5-4 7v-5l-3 1 1-7.5" />
    <path d="M15 6.5l7-1.5-10 17-10-17 7.741 1.5" />
  </svg>
);
