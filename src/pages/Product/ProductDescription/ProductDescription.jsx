import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import classes from "./ProductDescription.module.css";
import Description from "./Description";

function ProductDescription({ product }) {
  return (
    <div className={classes.product__description}>
      <div className={classes.product__description__content}>
        <ul className={classes.description__nav}>
          <li>
            <NavLink
              to=""
              className={({ isActive }) =>
                (isActive ? classes.activeLink : classes.link) + " subtitle-2"
              }
              end
            >
              Description
            </NavLink>
          </li>
          <li>
            <NavLink
              to="additional"
              className={({ isActive }) =>
                (isActive ? classes.activeLink : classes.link) + " subtitle-2"
              }
            >
              Additional Info
            </NavLink>
          </li>
          <li>
            <NavLink
              to="reviews"
              className={({ isActive }) =>
                (isActive ? classes.activeLink : classes.link) + " subtitle-2"
              }
            >
              Reviews
            </NavLink>
          </li>
          <li>
            <NavLink
              to="video"
              className={({ isActive }) =>
                (isActive ? classes.activeLink : classes.link) + " subtitle-2"
              }
            >
              Video
            </NavLink>
          </li>
        </ul>

        <Routes>
          <Route
            path=""
            element={
              <Description
                description={product.longDescription}
                bullets={product.bulletPoints}
              />
            }
          ></Route>
          <Route
            path="additional"
            element={<div className="heading-2">Additional Info</div>}
          ></Route>
          <Route
            path="reviews"
            element={<div className="heading-2">Reviews</div>}
          ></Route>
          <Route
            path="video"
            element={<div className="heading-2">Product Video</div>}
          ></Route>
        </Routes>
      </div>
    </div>
  );
}

export default ProductDescription;
