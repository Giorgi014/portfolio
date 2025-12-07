import { ButtonProps } from "./type";

export const Button = ({ className, children, onClick }: ButtonProps) => {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};
