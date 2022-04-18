import { useState } from "react";
import "./App.css";

const Autocomplete = ({ suggestions }) => {
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(0);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [input, setInput] = useState("");

  const onChange = (e) => {
    const userInput = e.target.value;
    
// Filter our suggestions that does not contain the user's input
    const unLinked = suggestions.filter(
      (suggestion) =>
        suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );
    setInput(e.target.value);
    setFilteredSuggestions(unLinked);
    setActiveSuggestionIndex(0);
    setShowSuggestions(true);
  };

  // when a user clicks for suggestions
  const onClick = (e) => {
    setInput(e.target.innerText);
    setFilteredSuggestions([]);
    setActiveSuggestionIndex(0);
    setShowSuggestions(false);
  }
const SuggestionsListComponent = () => {
  return filteredSuggestions.length ? (
    <ul className="suggestion">
      {filteredSuggestions.map((suggestion, index) => {
        let className;

        if(index === activeSuggestionIndex){
          className = "active-suggestion"
        }
        return (
          <li key={suggestions} onClick={onClick} className={className} >
            {suggestion}
          </li>
        )
      })}
    </ul>
  ) : (
    <div className="no-suggestion">
      <em>No suggestion</em>
    </div>
  )
}
  return (
    <div className="App">
      <>
      <div>
        <input
          type="text"
          className="suggestion-active"
          placeholder="input address"
          value={input}
          onChange={onChange}
        />
        {showSuggestions && input && <SuggestionsListComponent  />}
        </div>
        <div style={{marginTop:20}}>
        <input
          type="text"
          className="suggestion-array"
          placeholder="state"
          // value={input}
          // onChange={onChange}
        />
        </div>
        <div style={{marginTop:20}}>
        <input
          type="text"
          className="suggestion-array"
          placeholder="country"
          // value={input}
          // onChange={onChange}
        />
        </div>
        <div style={{marginTop:20}}>
        <input
          type="text"
          className="suggestion-array"
          placeholder="zipcode"
          // value={input}
          // onChange={onChange}
        />
        </div>
      </>
    </div>
  );
};

export default Autocomplete;
