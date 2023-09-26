import React from "react";
import { Link } from "react-router-dom";
import classes from "./ButtonPrimary.module.css";

function ButtonPrimary(props) {
  return (
    <Link to={props.to} className={classes.button__primary}>
      {props.title}
    </Link>
  );
}

export default ButtonPrimary;
