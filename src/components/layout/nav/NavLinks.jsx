import React from "react";
import { NavLink, useSearchParams } from "react-router-dom";
import classes from "./NavLinks.module.css";

function NavLinks() {
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <nav>
      <ul className={classes.nav__links}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              (isActive ? classes.activeLink : classes.link) +
              " body-text-regular-sm"
            }
            end
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/shop?" + searchParams.toString()}
            className={({ isActive }) =>
              (isActive ? classes.activeLink : classes.link) +
              " body-text-regular-sm"
            }
          >
            Shop
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              (isActive ? classes.activeLink : classes.link) +
              " body-text-regular-sm"
            }
          >
            Cart
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavLinks;
