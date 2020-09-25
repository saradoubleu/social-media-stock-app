import React, { useState } from "react";
import Button from "../Button/Button";
import DropDown from "../DropDown/DropDown";
import Autosuggester from "../Autosuggest/Autosuggest";
import { useTranslation } from "react-i18next";
import "./SearchStockSymbol.css";
import { socialMediaData, days } from "../../api/mockData";

const SearchStockSymbol = (props) => {
  const [options, setOptions] = useState("");
  const [value, setValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const { data } = props;
  const { t } = useTranslation();

  const onFormSubmit = (event) => {
    event.preventDefault();
    props.onSubmit(value);
  };

  const onSelectChange = (event) => {
    event.preventDefault();
    setOptions(value);
  };

  const getSuggestions = (input, dataSource) => {
    const inputValue = input.trim().toLowerCase();
    const inputLength = inputValue.length;

    return inputLength === 0
      ? []
      : dataSource.filter(
          (stock) =>
            stock.name.toLowerCase().slice(0, inputLength) === inputValue
        );
  };

  console.log(value);
  // console.log("SearchStockSymbol ", props);
  return (
    <div className="search-bar-wrapper">
      <form onSubmit={(event) => this.onFormSubmit(event)}>
        <span>
          <Autosuggester
            className="stock-symbol-autosuggest"
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
              setSuggestions(getSuggestions(value, data));
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
        </span>
        <span>
          <DropDown
            data={socialMediaData}
            styling={"social-styling"}
            placeholderText="Select network"
          />
        </span>
        <span>
          <DropDown
            data={days}
            styling={"number-of-days"}
            placeholderText="Select day"
          />
        </span>
        <span>
          <Button className="submit-button" type="submit" value={t("search")} />
        </span>
      </form>
    </div>
  );
};

export default SearchStockSymbol;
