import { BurgerMenuProps } from "../type";

export const BurgerMenu = ({ isOpen, onToggle }: BurgerMenuProps) => {
  return (
    <button
      className={`burger${isOpen ? " burger--open" : ""}`}
      onClick={onToggle}
      aria-label="Toggle navigation"
    >
      <span className="burger__bar"></span>
    </button>
  );
};
