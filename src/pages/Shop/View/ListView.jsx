import React from "react";
import classes from "./View.module.css";
import FeaturedCard from "../../Home/Featured/FeaturedCard";

function ListView({ products }) {
  return (
    <div className={classes.list__view}>
      {products.length > 0 &&
        products.map((product) => (
          <FeaturedCard key={product.id} product={product} />
        ))}
    </div>
  );
}

export default ListView;
