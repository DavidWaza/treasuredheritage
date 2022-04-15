import "./App.css";
import axios from "axios";
import Autocomplete from "./Autocomplete";
import { useState, useEffect } from "react";

const url = "https://maps.googleapis.com/maps/api/js?key=AIzaSyBS0jDQGP-Gw3c32AS0487MevOQIB7gqkk&libraries=places&callback=initMap&solution_channel=GMP_QB_addressselection_v1_cABC"
function App() {
  const [data, setData] = useState([])

  const Product = () => {
    useEffect(()=> {
      axios.get(url).then((res) => {
        setData(res.data)
      })
    }, [])
    if(!data) return null;
  }


  return (
    <div className="App">
      <div>
        <h1>Search Automedys</h1>
       <Autocomplete
        suggestions={[
          "Alligator",
          "Bask",
          "Crocodilian",
          "Death Roll",
          "Eggs",
          "Jaws",
          "Reptile",
          "Solitary",
          "Tail",
          "Wetlands"
        ]}

      />
      </div>
    </div>
  );
}
export default App;
