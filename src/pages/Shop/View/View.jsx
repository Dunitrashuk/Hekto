import React, { useEffect, useState } from "react";
import classes from "./View.module.css";
import { useSearchParams } from "react-router-dom";
import FeaturedCard from "../../Home/Featured/FeaturedCard";
import Svg from "../../../components/UI/Svg";
import GridView from "./GridView";
import ListView from "./ListView";

function View(props) {
  let [searchParams, setSearchParams] = useSearchParams();
  const [products, setProducts] = useState([]);

  let url = "";
  for (let [type, value] of searchParams.entries()) {
    url += `${type}=${value}&`;
  }

  useEffect(() => {
    fetch(`http://localhost:3000/products?${url}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.log(error);
      });

    window.scrollTo(0, 400);
  }, [searchParams]);

  if (products.length === 0) {
    return (
      <div className={classes.not__found}>
        <div className="heading-3">No products found!</div>;
        <Svg id="Cart" width="20rem" height="20rem" />
      </div>
    );
  }

  return (
    <div className={classes.view}>
      {props.viewStyle === "grid" && products.length > 0 && (
        <GridView products={products} />
      )}
      {props.viewStyle === "list" && products.length > 0 && (
        <ListView products={products} />
      )}
    </div>
  );
}

export default View;
