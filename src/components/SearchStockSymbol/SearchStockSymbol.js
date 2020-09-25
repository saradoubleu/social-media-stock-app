import React, { useState } from "react";
import Button from "../Button/Button";
import DropDown from "../DropDown/DropDown";
import Autosuggester from "../Autosuggest/Autosuggest";
import { useTranslation } from "react-i18next";
import "./SearchStockSymbol.css";

const SearchStockSymbol = (props) => {
  const [searchterm, setSearchterm] = useState("");

  // console.log("SearchStockSymbol: ", props);

  const onFormSubmit = (event) => {
    event.preventDefault();
    props.onSubmit(searchterm);
  };

  const { t } = useTranslation();
  const { data } = props;

  console.log("SearchStockSymbol ", props);
  return (
    <div className="search-bar-wrapper">
      <form onSubmit={(event) => this.onFormSubmit(event)}>
        <span>
          <Autosuggester placeholder={t("placeholder_stock")} data={data} />
        </span>
        {/* <span>
          <Autosuggester placeholder={t("placeholder_stock")} data={data} />
        </span> */}
        <span>
          <DropDown />
        </span>
        <span>
          <Button className="submit-button" type="submit" value={t("search")} />
        </span>
      </form>
    </div>
  );
};

export default SearchStockSymbol;
