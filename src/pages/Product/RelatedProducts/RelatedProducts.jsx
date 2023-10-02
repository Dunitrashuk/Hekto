import React, { useEffect, useState } from "react";
import classes from "./RelatedProducts.module.css";
import RelatedCard from "./RelatedCard";

function RelatedProducts({ category }) {
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/products?category=${category}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        const randomProducts = data
          .filter((product) => product.category === category)
          .sort(() => 0.5 - Math.random())
          .slice(0, 4);
        setRelatedProducts(randomProducts);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className={classes.related}>
      <div className={classes.related__content}>
        <h3 className="heading-3">Related Products</h3>

        <div className={classes.flex}>
          {relatedProducts &&
            relatedProducts.map((product, idx) => (
              <RelatedCard key={idx} product={product} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default RelatedProducts;
