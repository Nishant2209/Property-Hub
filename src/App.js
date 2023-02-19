import React from "react";
import SearchItem from "./components/Search Item/SearchItem";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
function App() {
  return (
    <div className="App">
      <Navbar />
      <SearchItem />
    </div>
  );
}

export default App;
