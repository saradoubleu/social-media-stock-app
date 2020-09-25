import React, { useEffect, useState } from "react";
import Header from "./Header/Header";
import SearchStocks from "./SearchStockSymbol/SearchStockSymbol";
import Suggestions from "./Suggestions/Suggestions";
import { instance as axios } from "../api/mockStockAPI";

export const sumOfCharacters = (symbol) => {
  let sum = 0;

  for (let i = 0; i < symbol.length; i++) {
    sum += parseInt(symbol[i], 36) - 9;
  }

  return sum;
};

export const socialMediaCountGenerator = (stockSymbol, socialMediaType) => {
  let socialMediaCount = 0;
  let sumOfStockSymbols = stockSymbol ? sumOfCharacters(stockSymbol) : 0;
  let sumOfSocialMediaTypes = socialMediaType
    ? sumOfCharacters(socialMediaType)
    : 0;

  socialMediaCount = Math.round(
    (sumOfStockSymbols + sumOfSocialMediaTypes) * (Math.random() * 50)
  );

  return socialMediaCount;
};

export const stockPriceGenerator = (stockSymbol, dates) => {
  let sumOfStockSymbol = stockSymbol ? sumOfCharacters(stockSymbol) : 0;
  let stockPrice = sumOfStockSymbol * Math.random() + sumOfStockSymbol;
  let roundedSumOfStockPrice = Math.round(stockPrice * 100) / 100;

  return roundedSumOfStockPrice;
  // do something with dates or for future implementation??
};

const App = () => {
  const [stock, setStock] = useState([]);

  useEffect(() => {
    onSearchSubmit();
  }, []);

  const onSearchSubmit = async (searchTerm) => {
    try {
      const response = await axios.get("http://localhost:3000/stockData", {
        params: {
          query: searchTerm,
        },
      });
      setStock(response.data);
    } catch (error) {
      console.error(error);
    }
    console.log("searchTerm ", searchTerm);
  };

  return (
    <div className="stock-wrapper">
      <Header data={stock} />
      <SearchStocks data={stock} onSubmit={onSearchSubmit} />
      {/* <p>
        social media count:
        {socialMediaCountGenerator("NVDA", "instagram")}
        <br></br>
        stockPrice: {stockPriceGenerator("NVDA")}
      </p> */}
      <Suggestions stock={stock} />
    </div>
  );
};

export default App;
