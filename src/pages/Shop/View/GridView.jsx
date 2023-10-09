import React from "react";
import FeaturedCard from "../../Home/Featured/FeaturedCard";
import classes from "./View.module.css";

function GridView({ products }) {
  return (
    <div className={classes.grid__view}>
      {products.length > 0 &&
        products.map((product) => (
          <FeaturedCard key={product.id} product={product} />
        ))}
    </div>
  );
}

export default GridView;
