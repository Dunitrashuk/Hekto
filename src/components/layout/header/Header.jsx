import React from "react";
import classes from "./Header.module.css";
import HeaderButton from "./HeaderButton";
import HeaderSelect from "./HeaderSelect";
import HeaderContact from "./HeaderContact";

function Header() {
  return (
    <div className={classes.header}>
      <div className={classes.header__content}>
        <HeaderContact type="mail" text="mhhasanul@gmail.com" />
        <HeaderContact type="tel" text="+37369005631" />

        <div className={classes.header__options}>
          <HeaderSelect values={["English", "Romanian", "Russian"]} />
          <HeaderSelect values={["USD", "EUR", "MDL"]} />

          <HeaderButton title="Login" svgId="User" path="" />
          <HeaderButton title="Wishlist" svgId="Heart" path="/shop" />
          <HeaderButton title="" svgId="Cart" path="/cart" />
        </div>
      </div>
    </div>
  );
}

export default Header;
