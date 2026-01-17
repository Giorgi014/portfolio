import { SoundOn, SoundOff } from "@/components/icons";
import { SoundToggleProps } from "../type";

const SoundToggle = ({
  isOn,
  width = 24,
  height = 24,
  fill = "currentColor",
  className = "",
  onClick,
  volume,
}: SoundToggleProps) => {
  return isOn ? (
    <SoundOn
      width={width}
      height={height}
      fill={fill}
      className={className}
      onClick={onClick}
      volume={volume}
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
