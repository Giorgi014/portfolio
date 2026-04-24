import { CardProps } from "../type";
import "./style/style.scss";

export const Card = ({ children, className, ...props }: CardProps) => {
  return (
    <div className={`card_container ${className}`} {...props}>
      {children}
    </div>
  );
};
