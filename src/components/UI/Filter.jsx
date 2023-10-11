import React, { useEffect, useState } from "react";
import Svg from "./Svg";
import classes from "./Filter.module.css";
import { useSearchParams } from "react-router-dom";

function Filter(props) {
  const [isChecked, setIsChecked] = useState(false);
  let [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const params = new URLSearchParams(searchParams).getAll(props.type) || [];
    setIsChecked(params.includes(props.value));
  }, [searchParams]);

  const toggleCheckbox = () => {
    setSearchParams((oldParams) => {
      const newParams = new URLSearchParams(oldParams);

      if (isChecked) {
        newParams.delete(props.type, props.value);
      } else {
        newParams.append(props.type, props.value);
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
      <label className={classes.checkbox__label}>{props.children}</label>
    </div>
  );
}

export default Filter;
