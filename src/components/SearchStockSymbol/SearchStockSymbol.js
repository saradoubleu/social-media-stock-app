import React from "react";
import Button from "../Button/Button";
import { useTranslation } from "react-i18next";

//BUTTON
//pass style
//pass the action

const SearchStockSymbol = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="search-wrapper">
      <form>
        <label htmlFor="search">Search</label>
        <input id="search" type="text" name="search"></input>
        <Button type="submit" label={t("hello")} />
      </form>
      <hr />
    </div>
  );
};

export default SearchStockSymbol;
