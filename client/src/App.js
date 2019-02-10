import React, { Component } from "react";
import "./App.css";
import PlacesContainer from "./components/PlacesContainer";
import ResultsContainer from "./components/ResultsContainer";
import axios from 'axios';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';
import CircularProgress from '@material-ui/core/CircularProgress';
import SimpleMap from "./components/GoogleMap";
import Snackbar from "@material-ui/core/Snackbar";


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
    this.state = { results: [], loading: false, center: {lat: 42.057858, lng: -87.675837}, zoom: 11, Error: false, selectedStart: null, selectedEnd: null };
    this.onGo = this.onGo.bind(this);
    this.reset = this.reset.bind(this);
    this.updateStart = this.updateStart.bind(this);
    this.updateEnd = this.updateEnd.bind(this);
  }

  updateStart(start){
    this.setState({
      start: {
        lat: start.location.lat,
        lng: start.location.lng
      },
      center:{
        lat: start.location.lat,
        lng: start.location.lng
      }
    })
  }

  updateEnd(end){
    this.setState({
      end: {
        lat:end.location.lat,
        lng:end.location.lng
      }
    })
  }

  onGo(start, end) {
    this.setState({
      loading: true
    })

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
        })
        .catch(error => {
          this.setState({loading: false});
          this.setState({Error: true});
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
      this.setState({ loading: false})
      this.setState({Error: false});
    })
  }

  reset() {
    this.setState({
      results: [],
    })
  }

  render() {
    return (
      <MuiThemeProvider theme={theme} >
        <div className="App">
          <PlacesContainer updateStart={this.updateStart} updateEnd={this.updateEnd} reset={this.reset} onGo={this.onGo} />
          {this.state.loading ? <CircularProgress className="loader" size={80}color="secondary" /> : <ResultsContainer results={this.state.results} /> }
          <Snackbar
            open={this.state.Error}
            autoHideDuration={600}
            anchorOrigin={{vertical: "top", horizontal: "center"}}
            message={<span>NO DRIVERS AVAILABLE</span>}
          />
        </div>
        <SimpleMap center={this.state.center} zoom={this.state.zoom} start={this.state.start} end={this.state.end}/>
      </MuiThemeProvider>
    );
  }
}

export default App;
