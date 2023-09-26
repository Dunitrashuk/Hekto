import React from "react";
import classes from "./Slide.module.css";
import circles from "./../../assets/svgs/heroCircles.svg";
import offerCircles from "./../../assets/svgs/heroPrice.svg";
import ButtonPrimary from "./ButtonPrimary";

function Slide({ product }) {
  return (
    <div className={classes.slide}>
      <img
        src="http://127.0.0.1:8080/images/hero-lamp.png"
        alt="hero lamp"
        className={classes.slide__lamp}
      />
      <div className={classes.slider__info}>
        <p className="body-text-bold">Best Furniture For Your Castle....</p>
        <h1 className="heading-1">New Furniture Collection {product.title}</h1>
        <h4 className="body-text-regular-sm">
          {product.title}. {product.description}
        </h4>
        <ButtonPrimary title="Shop Now" to="/shop" />
      </div>

      <div className={classes.slider__images}>
        <img
          src={circles}
          alt="slide circles"
          className={classes.slide__circles}
        />

        <img
          src={`http://127.0.0.1:8080/images/` + product.imageUrl}
          alt="product image"
          className={classes.product__image}
        />

        <div className={classes.slide__offer}>
          <img
            src={offerCircles}
            alt="offer circles"
            className={classes.offer__circles}
          />
          <h3 className={classes.slide__offer__text + " heading-3"}>
            {product.offer}% <br />
            Off
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Slide;
