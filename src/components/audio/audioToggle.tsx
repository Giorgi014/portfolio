import { AudioOn } from "@/assets/img/icons/audioOn";
import { AudioToggleProps } from "../type";
import { AudioOff } from "@/assets/img/icons/audioOff";

export const AudioToggle = ({
  isOn,
  width = 24,
  height = 24,
  fill = "currentColor",
  className = "",
  onClick,
  volume,
}: AudioToggleProps) => {
  return isOn ? (
    <AudioOn
      fill={fill}
      className={className}
      onClick={onClick}
      volume={volume}
    />
  ) : (
    <AudioOff
      width={width}
      height={height}
      fill={fill}
      className={className}
      onClick={onClick}
    />
  );
};
