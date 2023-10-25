import React from "react";
import classes from "./PaginationButton.module.css";
import { useSearchParams } from "react-router-dom";

function PaginationButton(props) {
  const [searchParams, setSearchParams] = useSearchParams();

  function handleClick() {
    setSearchParams((oldParams) => {
      const newParams = new URLSearchParams(oldParams);

      newParams.set("_page", props.page || "1");

      return newParams;
    });
  }

  return (
    <button
      disabled={props.disabled}
      className={classes.pagination__button}
      onClick={handleClick}
    >
      {props.title}
    </button>
  );
}

export default PaginationButton;
