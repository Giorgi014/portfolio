import { ButtonProps } from "./type";

export const Button = ({ className, children }: ButtonProps) => {
  return <button className={className}>{children}</button>;
};
