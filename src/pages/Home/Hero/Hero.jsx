import React, { useEffect, useState } from "react";
import HeroSlider from "./HeroSlider";
import classes from "./Hero.module.css";

function Hero() {
  const [sliderData, setSliderData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/products?brand=EleganceHome")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setSliderData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className={classes.hero}>
      {sliderData.length > 0 && <HeroSlider data={sliderData} />}
    </div>
  );
}

export default Hero;
