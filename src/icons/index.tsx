import { IconProps } from "../types";
import { makeClassName } from "../utils";
import { getHeartPath, getStarPath } from "./paths";

const Icon: React.FC<IconProps> = ({
  icon,
  size = 16,
  fillSelected = "#f5e100",
  fillUnselected = "#EEEEEE",
  stroke,
  isSelected,
  ...rest
}) => {
  const fill = isSelected ? fillSelected : fillUnselected;
  const d = icon === "star" ? getStarPath(size) : getHeartPath(size);
  return (
    <svg
      height={size}
      width={size}
      version="1.1"
      id={makeClassName(`${icon}-icon`)}
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path style={{ fill, stroke }} d={d} />
    </svg>
  );
};

export default Icon;
