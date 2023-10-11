import React, { useEffect, useState } from "react";
import classes from "./ShopSelect.module.css";
import Svg from "./Svg";

function ShopSelect(props) {
  const [value, setValue] = useState(props.options[1]);
  const [isOpen, setIsOpen] = useState(false);

  function openSelect() {
    setIsOpen((prev) => !prev);
  }

  function closeSelect(e) {
    if (value === e.target.value) return;
    setValue(e.target.textContent);
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
