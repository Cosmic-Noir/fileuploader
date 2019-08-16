import React from "react";
import SearchBar from "./SearchBar/SearchBar";
import FilterableList from "./FilterableList/FilterableList";
import "./App.css";

function App() {
  return (
    <div className="App">
      <SearchBar />
      <FilterableList files={this.props.files} />
    </div>
  );
}

export default App;
