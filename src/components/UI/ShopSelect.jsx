import React, { useEffect, useState } from "react";
import classes from "./ShopSelect.module.css";
import Svg from "./Svg";
import { useSearchParams } from "react-router-dom";

const sortOptions = {
  "Best Match": ["offer", "asc"],
  "Lowest Price": ["price", "asc"],
  "Highest Price": ["price", "desc"],
  "A-Z": ["title", "asc"],
  "Z-A": ["title", "desc"],
};

function getObjectKey(obj, value) {
  return Object.keys(obj).find(
    (key) => obj[key][0] === value[0] && obj[key][1] === value[1]
  );
}

function ShopSelect(props) {
  const [value, setValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  let [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (props.type === "sort") {
      setValue(
        getObjectKey(sortOptions, [
          searchParams.get("_sort"),
          searchParams.get("_order"),
        ])
      );
    } else {
      setValue(searchParams.get("_page") || "1");
      setValue(searchParams.get("_limit") || "10");
    }
  }, [searchParams]);

  function openSelect() {
    setIsOpen((prev) => !prev);
  }

  function closeSelect(e) {
    if (value === e.target.value) return;
    setValue(e.target.textContent);

    setSearchParams((oldParams) => {
      const newParams = new URLSearchParams(oldParams);

      if (props.type === "sort") {
        newParams.set("_sort", sortOptions[e.target.textContent][0]);
        newParams.set("_order", sortOptions[e.target.textContent][1]);
      } else {
        newParams.set(props.type, e.target.textContent);
        newParams.set("_page", 1);
      }

      return newParams;
    });
  }

  return (
    <div className={classes.shop__select} onClick={openSelect}>
      <h6 className="body-text-regular-sm">{value}</h6>
      {isOpen && (
        <div className={classes.dropdown}>
          <ul>
            {props.options.map((item, idx) => {
              return (
                <li key={idx} onClick={closeSelect}>
                  <h6 className="body-text-regular-sm">{item}</h6>
                </li>
              );
            })}
          </ul>
        </div>
      )}
      <div
        className={
          classes.svg__container + " " + (isOpen ? classes.svg__open : "")
        }
      >
        <Svg id="Chevron" />
      </div>
    </div>
  );
}

export default ShopSelect;
