import React from "react";

const Button = (props) => {
  return (
    <div className="button-wrapper">
      <input type={props.type} name="search-button" value={props.label}></input>
    </div>
  );
};

export default Button;
