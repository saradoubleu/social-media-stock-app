import React, { useState } from "react";
import Autosuggest from "react-autosuggest";
import "./Autosuggest.css";

const Autosuggester = (props) => {
  return (
    <Autosuggest
      suggestions={props.suggestions}
      onSuggestionsFetchRequested={props.onSuggestionsFetchRequested}
      onSuggestionsClearRequested={props.onSuggestionsClearRequested}
      getSuggestionValue={props.getSuggestionValue}
      renderSuggestion={props.renderSuggestion}
      inputProps={props.inputProps}
    />
  );
};

export default Autosuggester;
