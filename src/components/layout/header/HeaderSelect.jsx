import React from "react";
import classes from "./HeaderSelect.module.css";
import Svg from "../../UI/Svg";
import { useState } from "react";

function HeaderSelect(props) {
  const [value, setValue] = useState(props.values[0]);
  const [isOpen, setIsOpen] = useState(false);

  function openSelect() {
    setIsOpen(!isOpen);
  }

  function closeSelect(e) {
    setValue(e.target.textContent);
    setIsOpen(!isOpen);
  }

  return (
    <div className={classes.header__select} onClick={openSelect}>
      <p className="body-text-regular-sm">{value}</p>
      <Svg id="Chevron" />
      {isOpen && (
        <div className={classes.dropdown}>
          <ul>
            {props.values.map((item, idx) => {
              return (
                <li key={idx} onClick={closeSelect}>
                  <p className="body-text-regular-sm">{item}</p>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default HeaderSelect;
