import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import PlacesContainer from "./components/PlacesContainer";
import ResultsContainer from "./components/ResultsContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <PlacesContainer />
        <ResultsContainer />
      </div>
    );
  }
}

export default App;
