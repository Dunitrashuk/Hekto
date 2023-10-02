import React from "react";
import classes from "./Description.module.css";

function Description(props) {
  return (
    <div className={classes.description}>
      <h2 className="subtitle-2">Long Description</h2>
      <p className="body-text-bold text-color-grey">{props.description}</p>

      <h2 className="subtitle-2 u-margin-top-sm">More Details</h2>
      <ul className={classes.list}>
        {props.bullets.map((bullet, idx) => (
          <li key={idx} className="body-text-bold text-color-grey">
            {bullet}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Description;
