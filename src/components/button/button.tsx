import { forwardRef } from "react";
import { buttonProps } from "../type";

export const Button = forwardRef<HTMLButtonElement, buttonProps>(
  ({ children, variant, ...props }, ref) => {
    return (
      <button
        ref={ref}
        data-variant={variant}
        {...props}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";
