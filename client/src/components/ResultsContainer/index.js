import React from "react";
import Result from "./Result";
import axios from 'axios';
import "./index.css";

export default class ResultsContainer extends React.Component {
  componentDidMount(){
    axios.get('http://127.0.0.1:5000/api/v1/uber').then(function(response) {
      console.log(response.data)
    });

    axios.get('http://127.0.0.1:5000/api/v1/lyft').then(function(response) {
      console.log(response.data)
    });
  }

  render() {
    return (
      <div className="resultsContainer">
        {resultData.map(result => (
          <Result key={result.rideService} data={result} />
        ))}
        <img
          src={
            this.props.results
              ? require("../../static/car_2.png")
              : require("../../static/car_1.png")
          }
          alt="car"
          className="car"
        />
      </div>
    );
  }
}
