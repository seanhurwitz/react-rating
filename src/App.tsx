import React, { useState } from "react";
import "./App.css";
import { Icon } from "./icons";
import "./styles.css";
import { Props } from "./types";
import { makeClassName } from "./utils";

const Rating: React.FC<Props> = ({
  count = 5,
  icon,
  iconFillSelected,
  iconFillUnselected,
  iconStroke,
  onChange,
  rating,
  size,
}) => {
  const isDynamic = !!onChange;
  const [hoverState, setHoverState] = useState<number | undefined>();
  console.log("hoverState", hoverState);
  return (
    <div
      className={[
        makeClassName("container"),
        !isDynamic && makeClassName("container_frozen"),
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {Array(count)
        .fill("")
        .map((_, index) => {
          const isSelected: boolean =
            typeof hoverState === "number"
              ? index <= hoverState
              : index < rating;
          return icon ? (
            <Icon
              icon={icon || "star"}
              fillSelected={iconFillSelected}
              fillUnselected={iconFillUnselected}
              stroke={iconStroke}
              key={index}
              size={size}
              isSelected={isSelected}
              onClick={() => {
                onChange?.(index + 1);
              }}
              onMouseEnter={() => {
                isDynamic && setHoverState(index);
              }}
              onMouseLeave={() => {
                isDynamic && setHoverState(undefined);
              }}
            />
          ) : (
            <p>NOICON</p>
          );
        })}
    </div>
  );
};

function App() {
  const [rating, setRating] = useState(2);
  return (
    <Rating
      rating={rating}
      onChange={setRating}
      icon="heart"
      size={24}
      count={10}
      iconFillSelected="white"
      iconStroke="red"
    />
  );
}

export default App;