import { forwardRef } from "react";
import { buttonProps } from "../type";
import "./style/style.scss";

const btnVariant = {
  default: "btn",
  read_more: "btn_read_more",
  send: "send_btn",
};

export const Button = forwardRef<HTMLButtonElement, buttonProps>(
  ({ className, children, variant, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={`${variant ? btnVariant[variant] : ""} ${className ?? ""}`}
        {...props}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";
