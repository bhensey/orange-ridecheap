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
    let callRideshare=(url, start, end)=>{
      return new Promise((resolve, reject)=>{
        axios.get(url, {
          params: {
            startLongitude: start.location.lng,
            startLatitude: start.location.lat,
            endLongitude: end.location.lng,
            endLatitude: end.location.lat
          }
        }).then((response) => {
          resolve(response.data)
        });
      })
    }
    let promiseArray = []
    promiseArray.push(callRideshare('http://127.0.0.1:5000/api/v1/uber', start, end))
    promiseArray.push(callRideshare('http://127.0.0.1:5000/api/v1/lyft', start, end))
    Promise.all(promiseArray).then(values=>{
      let resultData = []
      let mergedValues = values.flat()
      mergedValues.sort((a, b) => {
        return a.avg_estimate - b.avg_estimate
      })

      this.setState({ results: mergedValues });
    })
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
