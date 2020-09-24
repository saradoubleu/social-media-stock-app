import React, { Component, useState } from "react";
import Autosuggest from "react-autosuggest";
import { stockData } from "../../api/mockData";
import "./Autosuggest.css";

// react autosuggest library  https://github.com/moroshko/react-autosuggest#installation
const getSuggestions = (value, data) => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0
    ? []
    : stockData.filter(
        (stock) => stock.name.toLowerCase().slice(0, inputLength) === inputValue
      );
};

const getSuggestionValue = (suggestion) => {
  console.log(suggestion);

  return suggestion.symbol + " - " + suggestion.name;
};

const renderSuggestion = (suggestion) => <div>{suggestion.name}</div>;

const Autosuggester = () => {
  const [value, setValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const onChange = (event, { newValue }) => {
    setValue(newValue);
  };

  const onSuggestionsFetchRequested = ({ value }) => {
    setSuggestions(getSuggestions(value));
  };

  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  const inputProps = {
    placeholder: "Enter stock symbol or name",
    value,
    onChange: onChange,
  };

  return (
    <Autosuggest
      suggestions={suggestions}
      onSuggestionsFetchRequested={onSuggestionsFetchRequested}
      onSuggestionsClearRequested={onSuggestionsClearRequested}
      getSuggestionValue={getSuggestionValue}
      renderSuggestion={renderSuggestion}
      inputProps={inputProps}
    />
  );
  // }
};

export default Autosuggester;
