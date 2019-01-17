import React, { Component } from "react";
import "./App.css";
import PlacesContainer from "./components/PlacesContainer";
import ResultsContainer from "./components/ResultsContainer";
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { results: [] };
    this.onGo = this.onGo.bind(this);
    this.reset = this.reset.bind(this)
  }

  onGo(start, end) {
    axios.get('http://127.0.0.1:5000/api/v1/uber', {
      params: {
        startLongitude: start.location.lng,
        startLatitude: start.location.lat,
        endLongitude: end.location.lng,
        endLatitude: end.location.lat
      }
    }).then((response) => {
      console.log(response.data)
    });

    axios.get('http://127.0.0.1:5000/api/v1/lyft', {
      params: {
        startLongitude: start.location.lng,
        startLatitude: start.location.lat,
        endLongitude: end.location.lng,
        endLatitude: end.location.lat
      }
    }).then((response) => {
      console.log(response.data)
    });

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

  reset() {
    this.setState({
      results: []
    })
  }

  render() {
    return (
      <div className="App">
        <img src={require("./static/logo.jpg")} alt="logo" className="logo" />
        <PlacesContainer reset={this.reset} onGo={this.onGo} />
        <ResultsContainer results={this.state.results} />
      </div>
    );
  }
}

export default App;
