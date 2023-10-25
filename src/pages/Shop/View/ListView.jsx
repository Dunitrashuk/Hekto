import React from "react";
import classes from "./View.module.css";
import ListCard from "./ListCard";

function ListView({ products }) {
  return (
    <div className={classes.list__view}>
      {products.length > 0 &&
        products.map((product) => (
          <ListCard key={product.id} product={product} />
        ))}
    </div>
  );
}

export default ListView;
