import { CardProps } from "../type";

export const Card = ({
  children,
  variant,
  onClick,
  ...props
}: CardProps) => {
  return (
    <div
      data-variant={variant}
      onClick={onClick}
      {...props}
    >
      {children}
    </div>
  );
};
