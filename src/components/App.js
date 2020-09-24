import React, { Component } from "react";
import Header from "./Header/Header";
import SearchStocks from "./SearchStockSymbol/SearchStockSymbol";
import Suggestions from "./Suggestions/Suggestions";

export default class App extends Component {
  render() {
    return (
      <div className="stock-wrapper">
        <Header />
        <SearchStocks />
        <Suggestions />{" "}
      </div>
    );
  }
}
