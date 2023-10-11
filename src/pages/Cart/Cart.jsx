import React, { useEffect, useState } from "react";
import PageHeader from "../../components/UI/PageHeader";
import RelatedCard from "../Product/RelatedProducts/RelatedCard";
import classes from "./Cart.module.css";

function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storage = JSON.parse(localStorage.getItem("Cart")) || [];
    setCart(storage);
  }, []);

  return (
    <div>
      <PageHeader title="Shopping Cart" />
      <div className={classes.cart}>
        <div className={classes.content}>
          {cart.map((product) => (
            <RelatedCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Cart;
