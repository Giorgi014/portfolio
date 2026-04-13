import { RowProps } from "@/components";

export const RightRown = ({
  size = 20,
  color = "currentColor",
  style,
  className,
  ...props
}: RowProps) => {
  return (
    <svg
      stroke={color}
      fill={color}
      viewBox="0 0 16 16"
      height={size}
      width={size}
      style={style}
      className={className}
      {...props}
    >
      <path d="M18 8L22 12L18 16"></path>
      <path d="M2 12H22"></path>
    </svg>
  );
};
