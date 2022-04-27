import "./App.css";
import axios from "axios";
import Autocomplete from "./Autocomplete";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([])



  return (
    <div className="App">
      <div>
        <h1>Search Automedys</h1>
       <Autocomplete
        suggestions={[
          // "Alligator",
          // "Bask",
          // "Crocodilian",
          // "Death Roll",
          // "Eggs",
          // "Jaws",
          // "Reptile",
          // "Solitary",
          // "Tail",
          // "Wetlands"
          // url.description
        ]}
      />
      </div>
    </div>
  );
}
export default App;
