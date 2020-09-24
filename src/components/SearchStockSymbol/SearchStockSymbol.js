import React, { useState } from "react";
import Button from "../Button/Button";
import { useTranslation } from "react-i18next";

//BUTTON
//pass style
//pass the action

//input
//autocomplete
const SearchStockSymbol = (props) => {
  const [searchterm, setSearchterm] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();
    props.onSubmit(searchterm);
  };

  const { t, i18n } = useTranslation();
  return (
    <div className="search-bar-wrapper">
      <form onSubmit={(event) => this.onFormSubmit(event)}>
        <label htmlFor="search">Search</label>
        <input
          id="search"
          type="text"
          name="search"
          value={searchterm}
          onChange={(e) => setSearchterm(e.target.value)}
        ></input>
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
