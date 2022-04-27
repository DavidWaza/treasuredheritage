import { useEffect, useState } from "react";
import PlacesAutocomplete, { getLatLng, geocodeByAddress } from "react-places-autocomplete"
import "./App.css";

const Autocomplete = ({ suggestions }) => {
  const [address, setAddress] = useState("");
  const [addressState, setAddressState] = useState("");
  const [addressZipCode, setAddressZipCode] = useState("");
  const [addressCountry, setAddressCountry] = useState("");

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyCBPWNDBhZJT6lpAEBNxB1z4VQE74ato8A&libraries=places&solution_channel=GMP_QB_addressselection_v1_cABC"
    script.async = true
    document.body.appendChild(script);
  })

  const handleSelect = async (address) => {
    try {
      const results = await geocodeByAddress(address);
      const latLng = await getLatLng(results[0]);
      console.log(results[0])
      console.log(latLng)

      const hasPostalCode = results[0].address_components.find(component => component.types.includes("postal_code"))
      const hasCountry = results[0].address_components.find(component => component.types.includes("country"))
      const hasState = results[0].address_components.find(component => component.types.includes("administrative_area_level_1"))

      if (hasPostalCode !== undefined) {
        setAddressZipCode(hasPostalCode.long_name)
      }

      if (hasCountry !== undefined) {
        setAddressCountry(hasCountry.long_name)
      }

      if (hasState !== undefined) {
        setAddressState(hasState.long_name)
      }
    } catch (e) {
      console.log(e)
    }
  }

  const handleChange = address => setAddress(address);

  return (
    <div className="App">
      <>
        <div>
          <input
            type="text"
            className="suggestion-active"
            placeholder="input address"
            hidden={true}
          />
          <PlacesAutocomplete
            value={address}
            onChange={handleChange}
            onSelect={handleSelect}
          >
            {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
              <div>
                <input
                  {...getInputProps({
                    placeholder: "Search Places...",
                    className: "location-search-input",
                  })}
                />
                <div className="autocomplete-dropdown-container">
                  {loading && <div>Loading...</div>}
                  {suggestions.map(suggestion => {
                    const className = suggestion.active
                      ? 'suggestion-item--active'
                      : 'suggestion-item';

                    // inline style for demonstration purpose
                    const style = suggestion.active
                      ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                      : { backgroundColor: '#ffffff', cursor: 'pointer' };
                    return (
                      <div
                        {...getSuggestionItemProps(suggestion, {
                          className,
                          style,
                        })}
                      >
                        <span>{suggestion.description}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </PlacesAutocomplete>
        </div>
        <div style={{ marginTop: 20 }}>
          <input
            type="text"
            className="suggestion-array"
            placeholder="state"
            readOnly={true}
            value={addressState}
          // onChange={onChange}
          />
        </div>
        <div style={{ marginTop: 20 }}>
          <input
            type="text"
            className="suggestion-array"
            placeholder="country"
            readOnly={true}
            value={addressCountry}
          // onChange={onChange}
          />
        </div>
        <div style={{ marginTop: 20 }}>
          <input
            type="text"
            className="suggestion-array"
            placeholder="zipcode"
            readOnly={true}
            value={addressZipCode}
          // onChange={onChange}
          />
        </div>
      </>
    </div>
  );
};

export default Autocomplete;
