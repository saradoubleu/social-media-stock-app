import React from "react";
import "./DropDown.css";

const DropDown = (props) => {
  const { data, styling } = props;

  return (
    <div className="drop-down-menu">
      <select className={styling} name="select" onChange>
        <option>{props.placeholderText} </option>
        {data.map((el, i) => {
          return (
            <option key={el.id} value={el.name}>
              {el.name}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default DropDown;
