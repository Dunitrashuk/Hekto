import React, { useEffect, useState } from "react";
import HeroSlider from "./HeroSlider";

function Hero() {
  const [sliderData, setSliderData] = useState([]);

  useEffect(() => {
    console.log("Home");
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

  return sliderData.length > 0 && <HeroSlider data={sliderData} />;
}

export default Hero;
