import React from "react";
import "./Suggestions.css";

const Suggestions = (props) => {
  let { stock } = props;
  // let stock = null;

  const stockSummary = stock ? (
    <table>
      <thead>
        <tr>
          <th>Stock Symbol</th>
          <th>Stock Name</th>
          <th>End of Day Price </th>
          <th>Buy/Sell/Hold</th>
        </tr>
      </thead>
      <tbody>
        {stock.map((item, i) => {
          return (
            <tr key={item.id}>
              <td>{item.symbol}</td>
              <td>{item.name}</td>
              <td>a</td>
              <td>b</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  ) : (
    <div>no result found</div>
  );

  return (
    <div className="suggestions-wrapper">
      {" "}
      <br></br>
      <br></br>
      <br></br>
      {stockSummary}{" "}
    </div>
  );
};

export default Suggestions;
