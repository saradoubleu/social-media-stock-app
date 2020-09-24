// • Since you don’t have a complete backend available to you yet, you will have to create and use your own mock data. Use the Math.random function to generate mock values for a given stock price and the count of social media posts that your backend service will provide, as well the recommendation for buying, holding (doing nothing) and selling the stock.

export const stockPriceGenerator = (stockSymbol, dates) => {};

export const socialMediaCountGenerator = (stockSymbol, socialMediaType) => {};

export const recommendationAlgorithm = (stockPrices, socialMediaCounts) => {};

export const data = {
  stock_price: 0,
  socialMediaPosts: 0,
};

export const stockData = {
  0: {
    symbol: "NVDA",
    name: "NVIDIA Corporation",
  },
  1: {
    symbol: "AMD",
    name: "Advanced Micro Devices Inc",
  },
  2: {
    symbol: "DXCM",
    name: "DexCom Inc",
  },
  3: {
    symbol: " WST",
    name: "West Pharmaceutical Services Inc.",
  },
  4: {
    symbol: " PYPL",
    name: "PayPal Holdings Inc",
  },
  5: {
    symbol: " AMZN",
    name: "Amazon.com Inc",
  },
  6: {
    symbol: "ABMD",
    name: "ABIOMED Inc",
  },
  7: {
    symbol: "AAPL",
    name: "Apple Inc",
  },
  8: {
    symbol: "NOW",
    name: "ServiceNow Inc",
  },
  9: {
    symbol: "CRM",
    name: "salesforce.com Inc",
  },
  10: {
    symbol: "ROL",
    name: "Rollins Inc.",
  },
  11: {
    symbol: "REGN",
    name: "Regeneron Pharmaceuticals Inc",
  },
  12: {
    symbol: "NFLX",
    name: "Netflix Inc",
  },
  13: {
    symbol: "LB",
    name: "L Brands Inc",
  },
  14: {
    symbol: "CDNS",
    name: "Cadence Design Systems Inc",
  },
  15: {
    symbol: "ODFL",
    name: "Old Dominion Freight Line Inc",
  },
  16: {
    symbol: "NLOK",
    name: "NortonLifeLock Inc",
  },
  17: {
    symbol: "TSCO",
    name: "Tractor Supply Co",
  },
  18: {
    symbol: "SNPS",
    name: "Synopsys Inc",
  },
  19: {
    symbol: "CMG",
    name: "Chipotle Mexican Grill Inc",
  },
};
