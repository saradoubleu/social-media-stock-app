import React, { useState } from "react";
import Button from "../Button/Button";
import DropDown from "../DropDown/DropDown";
import Autosuggester from "../Autosuggest/Autosuggest";
import { useTranslation } from "react-i18next";
import "./SearchStockSymbol.css";

const SearchStockSymbol = (props) => {
  const [searchterm, setSearchterm] = useState("");
  const [value, setValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const { data } = props;
  const { t } = useTranslation();

  const onFormSubmit = (event) => {
    event.preventDefault();
    props.onSubmit(searchterm);
  };

  console.log(value);

  const getSuggestions = (value) => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    return inputLength === 0
      ? []
      : data.filter(
          (stock) =>
            stock.name.toLowerCase().slice(0, inputLength) === inputValue
        );
  };

  // console.log("SearchStockSymbol ", props);
  return (
    <div className="search-bar-wrapper">
      <form onSubmit={(event) => this.onFormSubmit(event)}>
        <span>
          <Autosuggester
            inputProps={{
              placeholder: t("placeholder_stock"),
              value,
              onChange: (event, { newValue }) => {
                setValue(newValue);
              },
            }}
            data={data}
            value={value}
            suggestions={suggestions}
            onSuggestionsFetchRequested={async ({ value }) => {
              setSuggestions(getSuggestions(value));
            }}
            onSuggestionsClearRequested={() => {
              setSuggestions([]);
            }}
            getSuggestionValue={(suggestion) => {
              if (suggestion.symbol) {
                return suggestion.symbol + " - " + suggestion.name;
              } else {
                return suggestion.name;
              }
            }}
            renderSuggestion={(suggestion) =>
              suggestion.symbol ? (
                <div>{suggestion.symbol + " - " + suggestion.name}</div>
              ) : (
                <div>{suggestion.name}</div>
              )
            }
          />

          {/* <Autosuggester placeholder={t("placeholder_stock")} data={data} /> */}
        </span>
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
