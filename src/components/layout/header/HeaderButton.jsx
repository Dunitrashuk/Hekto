import React from "react";
import classes from "./HeaderButton.module.css";
import Svg from "../../UI/Svg";
import { Link } from "react-router-dom";

function HeaderButton(props) {
  return (
    <Link className={classes.button} to={props.path}>
      <p className="body-text-regular-sm">{props.title}</p>
      <Svg id={props.svgId} />
    </Link>
  );
}

export default HeaderButton;
