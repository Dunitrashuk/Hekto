import React from "react";
import Image from "./../../assets/images/partners.png";
import classes from "./Partners.module.css";

function Partners() {
  return (
    <div className={classes.partners}>
      <div className={classes.content}>
        <img src={Image} alt="partners" className={classes.image} />
      </div>
    </div>
  );
}

export default Partners;
