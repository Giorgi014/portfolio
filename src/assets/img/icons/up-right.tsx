import { IconProps } from "@/components";

export const UpRightIcon = ({
  size = 20,
  color = "currentColor",
  style,
  className,
  ...props
}: IconProps) => {
  return (
    <svg
      viewBox="0 0 24 24"
      height={size}
      width={size}
      style={style}
      className={className}
      stroke={color}
      fill={color}
      {...props}
    >
      <path d="M5.63589 19.7784L4.22169 18.3644L15.657 6.92908L10.0712 6.92908V4.92908L19.0712 4.92908L19.0712 13.9291H17.0712L17.0712 8.34326L5.63589 19.7784Z"></path>
    </svg>
  );
};
