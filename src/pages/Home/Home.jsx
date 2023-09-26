import React, { useEffect, useState } from "react";
import Slider from "../../components/UI/Slider";

function Home() {
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

  return <>{sliderData.length > 0 && <Slider data={sliderData} />}</>;
}

export default Home;
