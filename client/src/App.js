import React, { Component } from "react";
import "./App.css";
import PlacesContainer from "./components/PlacesContainer";
import ResultsContainer from "./components/ResultsContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <img src={require("./static/logo.jpg")} alt="logo" className="logo" />
        <PlacesContainer />
        <ResultsContainer />
        <img src={require("./static/car_2.png")} alt="car" className="car" />
      </div>
    );
  }
}

export default App;
