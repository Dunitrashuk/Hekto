import React, { useEffect, useState } from "react";
import classes from "./View.module.css";
import { useSearchParams } from "react-router-dom";
import Svg from "../../../components/UI/Svg";
import GridView from "./GridView";
import ListView from "./ListView";
import Pagination from "../Pagination/Pagination";

function View(props) {
  const [count, setCount] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setSearchParams((oldParams) => {
      const newParams = new URLSearchParams(oldParams);

      newParams.set("_sort", searchParams.get("_sort") || "price");
      newParams.set("_order", searchParams.get("_order") || "asc");
      newParams.set("_page", searchParams.get("_page") || "1");
      newParams.set("_limit", searchParams.get("_limit") || "10");

      return newParams;
    });
  }, []);

  useEffect(() => {
    if (searchParams.size) {
      fetch(`http://localhost:3000/products?${searchParams.toString()}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }

          setCount(response.headers.get("x-total-count"));

          return response.json();
        })
        .then((data) => {
          setProducts(data);
        })
        .catch((error) => {
          console.log(error);
        });
      window.scrollTo(0, 400);
    }
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

      <Pagination count={count} />
    </div>
  );
}

export default View;
