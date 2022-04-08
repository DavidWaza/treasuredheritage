import { useState } from "react";
import "./App.css";
import PlacesAutocomplete from "react-places-autocomplete";

function SearchApi() {
  const [address, setAddress] = useState(" ");
  return (
    <div className="App">
      <div>
        <PlacesAutocomplete value={address} onChange={setAddress}>
          {({
            getInputProps,
            suggestions,
            getSuggestionItemProps,
            loading,
          }) => (
            <div>
              <input
                {...getInputProps({
                  placeholder: "Input Address",
                  className: "location-search-input",
                })}
              />
              <div>
                {loading ? (
                  <div>
                    <h4>...loading</h4>
                  </div>
                ) : null}
                {suggestions.map((suggestion) => {
                  const style = {
                    marginTop: 10,
                    cursor: "pointer",
                    color: suggestion.active ? "#fff" : "#000",
                    paddingTop: 10,
                    paddingBottom: 10,
                    marginRight: 445,
                    marginLeft: 445,
                    borderRadius: 2,
                    textAlign: "center",
                    backgroundColor: suggestion.active ? "#263859" : "#fff",
                  };
                  return (
                    <div {...getSuggestionItemProps(suggestion, { style })}>
                      {suggestion.description}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </PlacesAutocomplete>
      </div>
    </div>
  );
}
export default SearchApi;
