import React from "react";
import classes from "./ListCard.module.css";
import Svg from "../../../components/UI/Svg";
import CardButton from "../../../components/UI/CardButton";
import { useNavigate } from "react-router-dom";

function ListCard({ product }) {
  let navigate = useNavigate();

  function handleClick(e) {
    if (
      e.target.localName === "svg" ||
      e.target.localName === "button" ||
      e.target.localName === "use"
    )
      return;
    navigate(`/product/${product.id}`);
  }

  return (
    <div className={classes.list__card} onClick={handleClick}>
      <div className={classes.image__container}>
        <img
          src={`http://127.0.0.1:8080/images/${product.imageUrl}`}
          alt={`featured product ${product.id}`}
        />
      </div>
      <div className={classes.card__info}>
        <div className={classes.flex}>
          <h4 className="body-text-regular">{product.title}</h4>
          <div className={classes.colors__container}>
            {product.colors.map((color, idx) => (
              <div
                key={idx}
                style={{ backgroundColor: color }}
                className={classes.color}
              ></div>
            ))}
          </div>
        </div>

        <div className={classes.flex}>
          <p className="body-text-regular-sm">${product.price}</p>
          <p className="body-text-regular-sm originalPrice">
            ${product.originalPrice}
          </p>

          <div className={classes.rating}>
            {[...Array(5)].map((item, idx) => {
              return (
                <Svg
                  key={idx}
                  id="Star"
                  fill={
                    idx <= product.rating - 1
                      ? "var(--color-secondary)"
                      : "var(--color-grey-2)"
                  }
                />
              );
            })}
          </div>
        </div>

        <p className={classes.description + " body-text-regular-sm"}>
          {product.longDescription.slice(0, 260)}
        </p>

        <div className={classes.flex}>
          <CardButton type="Cart" product={product} />
          <CardButton type="Heart" product={product} />
        </div>
      </div>
    </div>
  );
}

export default ListCard;
