import React from "react";
import Hero from "./Hero/Hero";
import FeaturedProducts from "./Featured/FeaturedProducts";
import Partners from "../../components/UI/Partners";

function Home() {
  return (
    <>
      <Hero />
      <FeaturedProducts />
      <Partners />
    </>
  );
}

export default Home;
