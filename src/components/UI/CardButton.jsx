import React, { useState } from "react";
import classes from "./CardButton.module.css";
import Svg from "./Svg";

function CardButton(props) {
  const [active, setActive] = useState(searchProduct() !== -1);

  function searchProduct() {
    const storage = JSON.parse(localStorage.getItem(props.type)) || [];
    return storage.findIndex((product) => product.id === props.product.id);
  }

  function handleClick() {
    const storage = JSON.parse(localStorage.getItem(props.type)) || [];
    const foundIdx = searchProduct(props.type);
    const newWishlist =
      foundIdx !== -1
        ? storage.filter((item) => item.id !== props.product.id)
        : [...storage, props.product];

    localStorage.setItem(props.type, JSON.stringify(newWishlist));
    setActive(!active);
  }

  return (
    <button
      className={active ? classes.active__button : classes.card__button}
      onClick={handleClick}
    >
      <Svg id={props.type}></Svg>
    </button>
  );
}

export default CardButton;
