import React from "react";
import classes from "./Navbar.module.css";
import Logo from "../../../assets/svgs/Hekto.svg";
import NavLinks from "./NavLinks";
import SearchBar from "../../UI/SearchBar";

function Navbar() {
  return (
    <div className={classes.navbar}>
      <div className={classes.navbar__content}>
        <img src={Logo} alt="Hekto Logo" />
        <NavLinks />
        <SearchBar />
      </div>
    </div>
  );
}

export default Navbar;
