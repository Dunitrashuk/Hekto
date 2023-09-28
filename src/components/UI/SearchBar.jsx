import React, { useState } from "react";
import Svg from "./Svg";
import classes from "./SearchBar.module.css";

function SearchBar() {
  const [value, setValue] = useState("");

  function handleSearch(e) {
    setValue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!value) return;
    setValue("");
  }

  return (
    <form className={classes.searchbar} onSubmit={handleSubmit}>
      <input
        type="text"
        className={classes.searchbar__input}
        value={value}
        onChange={handleSearch}
      />
      <button className={classes.searchbar__button}>
        <Svg id="Search" />
      </button>
    </form>
  );
}

export default SearchBar;
