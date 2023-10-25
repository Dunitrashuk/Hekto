import React from "react";
import classes from "./CartCard.module.css";
import Svg from "../../../components/UI/Svg";

function CartCard(props) {
  const product = props.product;

  function removeProduct() {
    const storage = JSON.parse(localStorage.getItem("Cart")) || [];
    const newStorage = storage.filter((item) => item.id !== product.id);

    localStorage.setItem("Cart", JSON.stringify(newStorage));
    props.updateCart();
  }

  function changeQuantity(type) {
    const storage = JSON.parse(localStorage.getItem("Cart")) || [];
    const idx = storage.findIndex((item) => item.id === product.id);

    if (type === "dec") {
      if (product.quantity === 1 || !product.quantity) {
        removeProduct();
        return;
      }

      if (product.quantity > 1) {
        product.quantity = product.quantity - 1;
      }
    }

    if (type === "inc") {
      product.quantity = product.quantity + 1 || 2;
    }

    storage.splice(idx, 1, product);
    localStorage.setItem("Cart", JSON.stringify(storage));

    props.updateCart();
  }

  return (
    <div className={classes.cart__card}>
      <div className={classes.product__details}>
        <div className={classes.image__container}>
          <img
            src={`http://127.0.0.1:8080/images/${product.imageUrl}`}
            alt={`featured product ${product.id}`}
          />
          <div className={classes.remove__button} onClick={removeProduct}>
            <Svg id="cross" stroke="var(--color-white)"></Svg>
          </div>
        </div>
        <div className={classes.card__description}>
          <h5 className="body-text-bold-sm">{product.title.slice(0, 20)}</h5>
          <p className="text-color-grey ">Brand: {product.brand}</p>
          <p className="text-color-grey ">Category: {product.category}</p>
        </div>
      </div>

      <div className={classes.flex}>
        <h5 className="body-text-bold-sm">${product.price}</h5>

        <div className={classes.quantity}>
          <div
            className={classes.quantity__button}
            onClick={() => changeQuantity("dec")}
          >
            -
          </div>
          <div className={classes.quantity__count}>{product.quantity || 1}</div>
          <div
            className={classes.quantity__button}
            onClick={() => changeQuantity("inc")}
          >
            +
          </div>
        </div>

        <h5 className="body-text-bold-sm">
          $
          {(
            parseFloat(product.price) * parseInt(product.quantity || 1)
          ).toFixed(2)}
        </h5>
      </div>
    </div>
  );
}

export default CartCard;
