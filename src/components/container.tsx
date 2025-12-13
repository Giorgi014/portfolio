import { ContainerProps } from "./type";

export const Container = ({ className, children }: ContainerProps) => {
  return (
    <div className={className}>
      {children}
      <div className="border_cont">
        <div className="border one"></div>
        <div className="border two"></div>
        <div className="border three"></div>
        <div className="border four"></div>
      </div>
    </div>
  );
};
