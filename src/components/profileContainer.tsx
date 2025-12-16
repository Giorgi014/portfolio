import { ContainerProps } from "./type";
import "./style/components.scss";

export const ProfileContainer = ({
  className,
  children,
  ...props
}: ContainerProps) => {
  return (
    <div className={`profile_container ${className}`} {...props}>
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
