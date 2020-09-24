import React from "react";
import { stockData } from "../../api/mockData";

const Suggestions = (props) => {
  console.log("Sugg: ", props);
  let stockDetails = props;

  const stockSummary = stockDetails ? (
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
        {stockData.map((item, i) => {
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

  return <div> {stockSummary} </div>;
};

export default Suggestions;
