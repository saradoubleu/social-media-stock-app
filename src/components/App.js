import React, { Component } from "react";
import Header from "./Header/Header";
import SearchStocks from "./SearchStockSymbol/SearchStockSymbol";
import Suggestions from "./Suggestions/Suggestions";
import { stockData } from "../api/mockData";

/*To Do:
typescript: socialMediaType
*/

export const sumOfCharacters = (symbol) => {
  let sum = 0;

  for (let i = 0; i < symbol.length; i++) {
    sum += parseInt(symbol[i], 36) - 9;
  }

  return sum;
};

export const stockPriceGenerator = (stockSymbol, dates) => {
  sumOfCharacters(stockSymbol);

  //must use Math.random
  // do something with dates
};

export const socialMediaCountGenerator = (stockSymbol, socialMediaType) => {
  let socialMediaCount = 0;
  let sumOfStockSymbols = stockSymbol ? sumOfCharacters(stockSymbol) : 0;
  let sumOfSocialMediaTypes = socialMediaType
    ? sumOfCharacters(socialMediaType)
    : 0;

  socialMediaCount =
    (sumOfStockSymbols + sumOfSocialMediaTypes) * (Math.random() * 50);

  return socialMediaCount;
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
    socialMediaCountGenerator("NVDA", "instagram");
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
