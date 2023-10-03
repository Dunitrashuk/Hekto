import React from "react";
import classes from "./ProductDetails.module.css";
import Svg from "../../../components/UI/Svg";
import CardButton from "../../../components/UI/CardButton";

function ProductDetails({ product }) {
  return (
    <div className={classes.details}>
      <div className={classes.details__content}>
        <div className={classes.details__images}>
          <div className={classes.cell__sm}>
            <img
              src={`http://127.0.0.1:8080/images/${product.imageUrl}`}
              alt="product image 1"
            />
          </div>
          <div className={classes.cell__sm}>
            <img
              src={`http://127.0.0.1:8080/images/${product.imageUrl}`}
              alt="product image "
            />
          </div>
          <div className={classes.cell__sm}>
            <img
              src={`http://127.0.0.1:8080/images/${product.imageUrl}`}
              alt="product image 3"
            />
          </div>
          <div className={classes.cell__main}>
            <img
              src={`http://127.0.0.1:8080/images/${product.imageUrl}`}
              alt="product image 4"
            />
          </div>
        </div>
        <div className={classes.details__info}>
          <h3 className="heading-3">{product.title}</h3>

          <div className={classes.info__rating}>
            {[...Array(5)].map((item, idx) => {
              return (
                <Svg
                  key={idx}
                  id="Star"
                  fill={
                    idx <= product.rating
                      ? "var(--color-secondary)"
                      : "var(--color-grey-2)"
                  }
                />
              );
            })}
            <p className="body-text-regular-sm">({product.reviews})</p>
          </div>

          <div className={classes.info__prices}>
            <p className="body-text-regular-sm">${product.price}</p>
            <p className="body-text-regular-sm originalPrice">
              ${product.originalPrice}
            </p>
          </div>

          <p className={classes.info__description + " body-text-bold"}>
            {product.description}
          </p>

          <div className={classes.info__flex}>
            <p className="body-text-bold">Add to Cart: </p>
            <CardButton key={product.id} type="Cart" product={product} />
          </div>

          <div className={classes.info__flex}>
            <p className="body-text-bold">Brand: </p>
            <div className={classes.blob}>{product.brand}</div>
          </div>

          <div className={classes.info__flex}>
            <p className="body-text-bold">Category: </p>
            <div className={classes.blob}>{product.category}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
