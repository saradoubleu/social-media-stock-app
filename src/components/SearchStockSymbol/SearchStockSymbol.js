import React, { useState } from "react";
import Button from "../Button/Button";
import DropDown from "../DropDown/DropDown";
import Autosuggester from "../Autosuggest/Autosuggest";
import { useTranslation } from "react-i18next";
import { stockData, socialMediaData } from "../../api/mockData";

//BUTTON
//pass style
//pass the action

//input
//autocomplete
//time window default 10 days(including today)
const SearchStockSymbol = (props) => {
  const [searchterm, setSearchterm] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();
    props.onSubmit(searchterm);
  };

  const { t } = useTranslation();
  return (
    <div className="search-bar-wrapper">
      <form onSubmit={(event) => this.onFormSubmit(event)}>
        {/* <label htmlFor="search">Search</label> */}
        {/* <input
          id="search"
          type="text"
          name="search"
          value={searchterm}
          onChange={(e) => setSearchterm(e.target.value)}
        ></input> */}
        <br></br>
        <br></br>
        <Autosuggester placeholder={t("placeholder_stock")} data={stockData} />
        <Autosuggester
          placeholder={t("placeholder_socialmedia")}
          data={socialMediaData}
        />
        <br></br>
        <DropDown />
        <br></br>
        <Button
          className="submit-button"
          onClick={(event) => onFormSubmit(event)}
          type="submit"
          label={t("hello")}
        />
      </form>
      <hr />
    </div>
  );
};

export default SearchStockSymbol;
