import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import PlacesContainer from "./components/PlacesContainer";
import ResultsContainer from "./components/ResultsContainer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { results: [] };
    this.onGo = this.onGo.bind(this);
  }

  onGo(start, end) {
    let resultData = [
      {
        rideService: "Lyft",
        priceData: { price: "$24.43" },
        link:
          "lyft://ridetype?id=lyft&pickup[latitude]=37.764728&pickup[longitude]=-122.422999&destination[latitude]=37.7763592&destination[longitude]=-122.4242038"
      },
      {
        rideService: "Uber",
        priceData: { price: "$25.12" },
        link:
          "lyft://ridetype?id=lyft&pickup[latitude]=37.764728&pickup[longitude]=-122.422999&destination[latitude]=37.7763592&destination[longitude]=-122.4242038"
      }
    ];
    this.setState({ results: resultData });
  }
  render() {
    return (
      <div className="App">
        <img src={require("./static/logo.jpg")} alt="logo" className="logo" />
        <PlacesContainer onGo={this.onGo} />
        <ResultsContainer results={this.state.results} />
      </div>
    );
  }
}

export default App;
