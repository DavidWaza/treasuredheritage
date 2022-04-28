import "./App.css";
import Autocomplete from "./Autocomplete";

function App() {
  return (
    <div className="App">
      <div>
        <h1>Search Automedys</h1>
        <Autocomplete suggestions={[]}/>
      </div>
    </div>
  );
}
export default App;
