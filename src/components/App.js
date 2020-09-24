import React, { Component } from "react";
import Header from "./Header/Header";
import SearchStocks from "./SearchStockSymbol/SearchStockSymbol";
import Suggestions from "./Suggestions/Suggestions";
import { stockData } from "../api/mockData";

export const sumOfStockSymbolChars = (symbol) => {
  let sum = 0;

  for (let i = 0; i < symbol.length; i++) {
    sum += parseInt(symbol[i], 36) - 9;
  }

  return sum;
};

// console.log(sumOfStockSymbolChars("CRM"));

export const stockPriceGenerator = (stockSymbol, dates) => {
  //take symbol
  //each letter of alphabet equates to a value
  //sum the value
  sumOfStockSymbolChars(stockSymbol);
  //multiply it by
};

export default class App extends Component {
  state = { stock: [] };

  onSearchSubmit = async (searchTerm) => {
    try {
      //API Request of Stock Data
      const response = stockData;
    } catch (error) {
      console.error(error);
    }
    this.setState({ stock: "" });
  };

  render() {
    console.log(
      "STOCK: ",
      stockData.map((el) => el.name)
    );
    return (
      <div className="stock-wrapper">
        <Header />
        <SearchStocks onSubmit={this.onSearchSubmit} />
        {/* <Suggestions data={} />{" "} */}
      </div>
    );
  }
}
