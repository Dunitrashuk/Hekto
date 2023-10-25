import React from "react";
import classes from "./FeaturedCard.module.css";
import { Link } from "react-router-dom";
import CardButton from "../../../components/UI/CardButton";

function FeaturedCard({ product }) {
  return (
    <div className={classes.featured__card}>
      <div className={classes.featured__image__container}>
        <div className={classes.buttons__container}>
          <CardButton type="Cart" product={product} />
          <CardButton type="Heart" product={product} />
        </div>
        <img
          src={`http://127.0.0.1:8080/images/${product.imageUrl}`}
          alt={`featured product ${product.id}`}
        />
      </div>
      <div className={classes.featured__info}>
        <h4 className="body-text-regular">{product.title.slice(0, 24)}</h4>
        <div className={classes.colors__container}>
          {product.colors.map((color, idx) => (
            <div
              key={idx}
              style={{ backgroundColor: color }}
              className={classes.color}
            ></div>
          ))}
        </div>
        <p className="body-text-regular-sm">{product.brand}</p>
        <p className="body-text-regular-sm">${product.price}</p>
      </div>
      <Link to={`/product/${product.id}`} className={classes.featured__button}>
        View Details
      </Link>
    </div>
  );
}

export default FeaturedCard;
