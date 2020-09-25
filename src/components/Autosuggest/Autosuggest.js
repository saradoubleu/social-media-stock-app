import React, { useState } from "react";
import Autosuggest from "react-autosuggest";
import "./Autosuggest.css";

// react autosuggest library  https://github.com/moroshko/react-autosuggest#installation

const Autosuggester = (props) => {
  const [value, setValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  console.log("Auto: ", props);

  const getSuggestions = (value) => {
    const { data } = props;

    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    return inputLength === 0
      ? []
      : data.filter(
          (stock) =>
            stock.name.toLowerCase().slice(0, inputLength) === inputValue
        );
  };

  const getSuggestionValue = (suggestion) => {
    if (suggestion.symbol) {
      return suggestion.symbol + " - " + suggestion.name;
    } else {
      return suggestion.name;
    }
  };

  const renderSuggestion = (suggestion) =>
    suggestion.symbol ? (
      <div>{suggestion.symbol + " - " + suggestion.name}</div>
    ) : (
      <div>{suggestion.name}</div>
    );

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
    placeholder: props.placeholder,
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
