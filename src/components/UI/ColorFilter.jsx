import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import classes from "./ColorFilter.module.css";

function ColorFilter(props) {
  const [isChecked, setIsChecked] = useState(false);
  let [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const params =
      new URLSearchParams(searchParams).getAll(props.type + "_like") || [];
    setIsChecked(params.includes(props.value));
  }, [searchParams]);

  const toggle = () => {
    setSearchParams((oldParams) => {
      const newParams = new URLSearchParams(oldParams);

      if (isChecked) {
        newParams.delete(props.type + "_like", props.value);
      } else {
        newParams.append(props.type + "_like", props.value);
      }

      return newParams;
    });
  };

  return (
    <div
      className={classes.color__filter}
      onClick={toggle}
      style={{
        backgroundColor: isChecked ? "#e8e9f2" : "transparent",
      }}
    >
      <div
        className={classes.color__filter__color}
        style={{
          backgroundColor: props.value,
        }}
      ></div>
      <label className={classes.color__label}>
        {props.value.charAt(0).toUpperCase() + props.value.slice(1)}
      </label>
    </div>
  );
}

export default ColorFilter;
