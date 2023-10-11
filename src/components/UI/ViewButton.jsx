import React from "react";
import Svg from "./Svg";
import classes from "./ViewButton.module.css";

function ViewButton(props) {
  function handleToggle() {
    props.setViewStyle(props.type);
  }

  return (
    <div className={classes.view__button} onClick={handleToggle}>
      <Svg
        id={props.type === "grid" ? "grid-view" : "list-view"}
        width="1.6rem"
        height="1.6rem"
      />
    </div>
  );
}

export default ViewButton;
