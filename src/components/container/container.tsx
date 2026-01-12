import { ContainerProps } from "../type";
import "./style/container.scss";

export const Container = ({
  className,
  children,
  variant,
  ...props
}: ContainerProps) => {
  const variantClassMap = {
    container: "container",
    profile: "profile_container",
    projects: "projects_container",
    settings: "settings_container",
  };

  const variantClass = variant ? variantClassMap[variant] : "";

  return (
    <div className={`${variantClass} ${className}`} {...props}>
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
