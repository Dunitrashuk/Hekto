import React from "react";
import classes from "./HeaderContact.module.css";
import Svg from "../../UI/Svg";

function HeaderContact(props) {
  return (
    <a
      href={props.type === "tel" ? "tel:" : "mailto:" + props.text}
      className={classes.header__contact + " body-text-regular-sm"}
    >
      <Svg id={props.type === "tel" ? "Call" : "Envelope"} />
      {props.text}
    </a>
  );
}

export default HeaderContact;
