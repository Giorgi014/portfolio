import { ContainerProps } from "./type";

export const Container = ({ className, children }: ContainerProps) => {
  return <div className={className}>{children}</div>;
};
