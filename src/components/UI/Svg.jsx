import React from "react";
import Sprite from "./../../assets/svgs/sprite.svg";

function Svg(props) {
  const styles = {
    fill: props.fill,
    stroke: props.stroke,
  };

  return (
    <svg style={styles}>
      <use href={Sprite + "#" + props.id}></use>
    </svg>
  );
}

export default Svg;
