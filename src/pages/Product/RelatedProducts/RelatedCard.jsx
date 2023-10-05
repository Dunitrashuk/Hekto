import React from "react";
import classes from "./RelatedCard.module.css";
import { Link } from "react-router-dom";
import Svg from "../../../components/UI/Svg";

function RelatedCard({ product }) {
  return (
    <Link to={`/product/${product.id}`} className={classes.related__card}>
      <div className={classes.related__img}>
        <img
          src={`http://127.0.0.1:8080/images/${product.imageUrl}`}
          alt={`product ${product.id} image`}
        />
      </div>

      <div className={classes.related__info}>
        <div>
          <h4 className="body-text-bold">{product.title}</h4>
          <p className="body-text-bold-sm u-margin-top-sm">${product.price}</p>
        </div>

        <div className={classes.rating}>
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
        </div>
      </div>
    </Link>
  );
}

export default RelatedCard;
