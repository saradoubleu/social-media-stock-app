import React from "react";
import "./Header.css";

const Header = (props) => {
  // console.log("Header ", props);
  const { data } = props;

  let marqueeScroller = data ? (
    <div className="marquee">
      <div className="marquee__inner" aria-hidden="true">
        <span>
          {data.map((el) => {
            // console.log(el.symbol);
            return <span>{el.symbol}</span>;
          })}
        </span>
      </div>{" "}
    </div>
  ) : null;

  return (
    <div className="header-wrapper">
      <div className="marquee-wrapper">{marqueeScroller}</div>
      <div className="logo">
        <h1>Social Stock Trader</h1>
      </div>
    </div>
  );
};

export default Header;
