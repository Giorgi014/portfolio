import { CardProps } from "../type";
import "./style/style.scss";

export const Card = ({
  children,
  className,
  variant,
  onClick,
  ...props
}: CardProps) => {
  const variantClass = variant ? `card--${variant}` : "";
  return (
    <div
      className={`card_container ${variantClass} ${className ?? ""}`.trim()}
      onClick={onClick}
      {...props}
    >
      {children}
    </div>
  );
};
