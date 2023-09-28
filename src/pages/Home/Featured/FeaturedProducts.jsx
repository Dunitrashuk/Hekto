import React, { useEffect, useState } from "react";
import classes from "./FeaturedProducts.module.css";
import FeaturedSlider from "./FeaturedSlider";

function FeaturedProducts() {
  const [chairsData, setChairsData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/products?category=chairs")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setChairsData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <section className={classes.featured}>
      <div className={classes.featured__content}>
        <h2 className="heading-2">Featured Products</h2>
        <FeaturedSlider data={chairsData} />
      </div>
    </section>
  );
}

export default FeaturedProducts;
