import React from "react";
import { Link } from "react-router-dom";
import classes from "./NavLinks.module.css";

function NavLinks() {
  return (
    <nav>
      <ul className={classes.nav__links}>
        <li>
          <Link to="/" className={classes.link + " body-text-regular-sm"}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/shop" className={classes.link + " body-text-regular-sm"}>
            Shop
          </Link>
        </li>
        <li>
          <Link to="/cart" className={classes.link + " body-text-regular-sm"}>
            Cart
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavLinks;
