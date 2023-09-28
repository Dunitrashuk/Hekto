import React, { useState } from "react";
import classes from "./EmailInput.module.css";

function EmailInput() {
  const [value, setValue] = useState("");

  function handleInput(e) {
    setValue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!value) return;
    console.log(value);
    setValue("");
  }

  return (
    <form className={classes.email__input} onSubmit={handleSubmit}>
      <input
        type="email"
        className={classes.__input}
        value={value}
        onChange={handleInput}
        placeholder="Enter Email Address"
        required
      />
      <button className={classes.__button + " body-text-regular-sm"}>
        Sign Up
      </button>
    </form>
  );
}

export default EmailInput;
