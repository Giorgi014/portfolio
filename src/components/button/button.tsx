import { forwardRef } from "react";
import type { buttonProps } from "../type";

type ButtonVariantStyles = {
  shadow: string;
  edge: string;
  front: string;
};

const defaultVariantStyles: ButtonVariantStyles = {
  shadow: "bg-white/35",
  edge: "bg-[linear-gradient(to_right,#343434_0%,#555_8%,#343434_92%,#242424_100%)]",
  front: "bg-[linear-gradient(110deg,#666,#aaa)]",
};

const variantStyles: Partial<
  Record<NonNullable<buttonProps["variant"]>, ButtonVariantStyles>
> = {
  default: defaultVariantStyles,
};

export const Button = forwardRef<HTMLButtonElement, buttonProps>(
  ({ children, variant = "default", className, ...props }, ref) => {
    const styles = variantStyles[variant] ?? defaultVariantStyles;

    return (
      <button
        ref={ref}
        data-variant={variant}
        className={`group relative inline-flex cursor-pointer touch-manipulation select-none border-0 bg-transparent p-0 align-middle [-webkit-tap-highlight-color:transparent] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-60 ${className ?? ""}`}
        {...props}
      >
        <span
          aria-hidden="true"
          className={`absolute inset-0 translate-y-0.5 rounded-xl blur-[2px] transition-transform duration-500 ease-[cubic-bezier(0.3,0.7,0.4,1)] group-hover:translate-y-1 group-active:translate-y-px motion-reduce:transition-none ${styles.shadow}`}
        />
        <span
          aria-hidden="true"
          className={`absolute inset-0 rounded-xl ${styles.edge}`}
        />
        <span
          className={`relative flex min-h-14 flex-1 -translate-y-1 items-center justify-center gap-2 rounded-xl border border-white/40 px-8 py-4 font-league-spartan-bold text-white shadow-sm backdrop-blur-md transition-transform duration-500 ease-[cubic-bezier(0.3,0.7,0.4,1)] group-hover:-translate-y-1.5 group-active:-translate-y-0.5 motion-reduce:transition-none ${styles.front}`}
        >
          {children}
        </span>
      </button>
    );
  },
);

Button.displayName = "Button";
