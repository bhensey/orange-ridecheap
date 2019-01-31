import React, { Component } from "react";
import "./App.css";
import PlacesContainer from "./components/PlacesContainer";
import ResultsContainer from "./components/ResultsContainer";
import axios from 'axios';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';


const theme = createMuiTheme({
  palette: {
    primary: { main: '#E70B81' }, // Purple and green play nicely together.
    secondary: { main: '#09091A' }, // This is just green.A700 as hex.
    grey: {main: grey[700]}
  }
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { results: [] };
    this.onGo = this.onGo.bind(this);
    this.reset = this.reset.bind(this)
  }

  onGo(start, end) {
    let callRideshare = (url, start, end) => {
      return new Promise((resolve, reject) => {
        axios.get(url, {
          method: "GET",
          params: {
            startLongitude: start.location.lng,
            startLatitude: start.location.lat,
            endLongitude: end.location.lng,
            endLatitude: end.location.lat,
            startName: start.label,
            endName: end.label
          },
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"
          }
        }).then((response) => {
          resolve(response.data)
        });
      })
    }
    let promiseArray = []
    promiseArray.push(callRideshare(process.env.REACT_APP_SERVER + '/api/v1/uber', start, end))
    promiseArray.push(callRideshare(process.env.REACT_APP_SERVER + '/api/v1/lyft', start, end))
    Promise.all(promiseArray).then(values => {
      let mergedValues = values.flat()
      mergedValues.sort((a, b) => a.avg_estimate - b.avg_estimate)
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
      <MuiThemeProvider theme={theme} >
        <div className="App">
          {/* <img
          className="map-image"
          src="https://maps.googleapis.com/maps/api/staticmap?zoom=13&size=300x700&maptype=roadmap
          &markers=color:blue%7C%7C42.057858,-87.675837
          &key=AIzaSyA-H9SnK9o05ZokTu1wrw3pvB-vtwHDHH4"
                  />*/}
          <PlacesContainer reset={this.reset} onGo={this.onGo} />
          <ResultsContainer results={this.state.results} />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
