import React, { useEffect, useState } from "react";
import classes from "./Filter.module.css";
import { useSearchParams } from "react-router-dom";
import Svg from "./Svg";

function PriceFilter(props) {
  const [isChecked, setIsChecked] = useState(false);
  let [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const params =
      new URLSearchParams(searchParams).getAll(props.type + "_gte") || [];
    setIsChecked(params.includes(props.gte + ""));
  }, [searchParams]);

  const toggleCheckbox = () => {
    setSearchParams((oldParams) => {
      const newParams = new URLSearchParams(oldParams);

      if (isChecked) {
        newParams.delete(props.type + "_gte");
        newParams.delete(props.type + "_lte");
      } else {
        newParams.set(props.type + "_gte", props.gte);

        if (props.lte !== "max") {
          newParams.set(props.type + "_lte", props.lte);
        } else {
          newParams.set(props.type + "_lte", Infinity);
        }
      }

      return newParams;
    });
  };

  return (
    <div className={classes.checkbox} onClick={toggleCheckbox}>
      <div
        className={classes.checkbox__box}
        style={{
          backgroundColor: `var(--color-${props.color})`,
          opacity: isChecked ? "1" : "0.3",
        }}
      >
        {isChecked && <Svg id="check" className={classes.checkbox__sign} />}
      </div>
      <label className={classes.checkbox__label}>
        ${props.gte} {props.lte === "max" ? "+" : ` - $${props.lte}`}
      </label>
    </div>
  );
}

export default PriceFilter;
