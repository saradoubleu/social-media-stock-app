import React from "react";
import "./Button.css";

const Button = (props) => {
  return (
    <div className="button-wrapper">
      <input
        className="buttoned"
        type={props.type}
        name="search-button"
        value={props.label}
      ></input>
    </div>
  );
};

export default Button;
