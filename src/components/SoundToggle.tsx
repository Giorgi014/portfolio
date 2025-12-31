import SoundOn from "./icons/SoundOn";
import SoundOff from "./icons/SoundOff";
import { SoundToggleProps } from "./type";

const SoundToggle = ({
  isOn,
  width = 24,
  height = 24,
  fill = "currentColor",
  className = "",
  onClick,
}: SoundToggleProps) => {
  return isOn ? (
    <SoundOn
      width={width}
      height={height}
      fill={fill}
      className={className}
      onClick={onClick}
    />
  ) : (
    <SoundOff
      width={width}
      height={height}
      fill={fill}
      className={className}
      onClick={onClick}
    />
  );
};

export default SoundToggle;
