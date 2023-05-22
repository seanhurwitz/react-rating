import { IconProps } from "../types";
import { makeClassName } from "../utils";
import { getHeartPath, getStarPath } from "./paths";

const Icon: React.FC<IconProps> = ({
  icon,
  size = 16,
  fillSelected,
  fillUnselected = "#EEEEEE",
  stroke: st,
  isSelected,
  ...rest
}) => {
  const defaultFillSelected = icon === "star" ? "#f5e100" : "#ff0044";
  const fill = isSelected
    ? fillSelected || defaultFillSelected
    : fillUnselected;
  const stroke = isSelected ? st : undefined;
  const d = icon === "star" ? getStarPath(size) : getHeartPath(size);
  return (
    <svg
      height={size}
      width={size}
      id={makeClassName(`${icon}-icon`)}
      {...rest}
    >
      <path style={{ fill, stroke }} d={d} />
    </svg>
  );
};

export default Icon;
