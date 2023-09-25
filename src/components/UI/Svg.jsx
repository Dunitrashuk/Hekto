import React from "react";
import Sprite from "./../../assets/svgs/sprite.svg";

function Svg(props) {
  return (
    <svg>
      <use href={Sprite + "#" + props.id}></use>
    </svg>
  );
}

export default Svg;
