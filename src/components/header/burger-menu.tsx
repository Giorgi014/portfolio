import { BurgerMenuProps } from "../type";

export const BurgerMenu = ({ isOpen, onToggle }: BurgerMenuProps) => {
  return (
    <button
      onClick={onToggle}
      aria-label={isOpen ? "Close navigation" : "Open navigation"}
      aria-expanded={isOpen}
    >
      <span />
      <span />
      <span />
    </button>
  );
};
