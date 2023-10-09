import React from "react";
import Sprite from "./../../assets/svgs/sprite.svg";

function Svg(props) {
  const styles = {
    fill: props.fill,
    stroke: props.stroke,
    height: props.height || "",
    width: props.width || "",
  };

  return (
    <svg style={styles}>
      <use href={Sprite + "#" + props.id}></use>
    </svg>
  );
}

export default Svg;
