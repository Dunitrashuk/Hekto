import React, { useEffect, useState } from "react";
import PageHeader from "../../components/UI/PageHeader";
import CartCard from "./CartCard/CartCard";
import classes from "./Cart.module.css";
import Svg from "../../components/UI/Svg";
import { Link } from "react-router-dom";
import ButtonPrimary from "../../components/UI/ButtonPrimary";

function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    updateCart();
  }, []);

  function updateCart() {
    const storage = JSON.parse(localStorage.getItem("Cart")) || [];
    setCart(storage);
  }

  function calculateCartTotal() {
    const total = cart.reduce((accumulator, item) => {
      const itemTotal = parseFloat(item.price) * (parseInt(item.quantity) || 1);
      return accumulator + itemTotal;
    }, 0);

    return total;
  }

  function clearCart() {
    localStorage.removeItem("Cart");
    setCart([]);
  }

  if (cart.length === 0) {
    return (
      <div>
        <PageHeader title="Shopping Cart" />

        <div className={classes.cart}>
          <div className={classes.not__found}>
            <div className="heading-3">Your Cart Is Empty!</div>;
            <Svg id="Cart" width="20rem" height="20rem" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <PageHeader title="Shopping Cart" />

      <div className={classes.cart}>
        <div className={classes.cart__content}>
          <div className={classes.items}>
            <div className={classes.items__titles}>
              <h3 className="subtitle-3">Product</h3>

              <div className={classes.flex}>
                <h3 className="subtitle-3">Price</h3>
                <h3 className="subtitle-3">Quantity</h3>
                <h3 className="subtitle-3">Total</h3>
              </div>
            </div>

            {cart.map((product) => (
              <CartCard
                key={product.id}
                product={product}
                updateCart={updateCart}
              />
            ))}

            <div className={classes.clear__button} onClick={clearCart}>
              <ButtonPrimary title="Clear Cart" />
            </div>
          </div>

          <div className={classes.total}>
            <h3 className="subtitle-3">Cart Totals</h3>

            <div className={classes.total__container}>
              <div className={classes.total__container__line}>
                <h3 className="subtitle-3">Subtotals:</h3>
                <h3 className="subtitle-3">
                  ${calculateCartTotal().toFixed(2)}
                </h3>
              </div>

              <div className={classes.total__container__line}>
                <h3 className="subtitle-3">Totals:</h3>
                <h3 className="subtitle-3">
                  ${(calculateCartTotal() + 25).toFixed(2)}
                </h3>
              </div>

              <div className={classes.simple__flex}>
                <div className={classes.total__svg}>
                  <Svg id="check" />
                </div>
                <p className="">Calculated Shipping & Taxes: +$25</p>
              </div>

              <Link className={classes.checkout__button}>
                Proceed To Checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
