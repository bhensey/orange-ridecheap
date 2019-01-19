import React from "react";
import Result from "./Result";
import "./index.css";

export default class ResultsContainer extends React.Component {

  render() {
    return (
      <div className="resultsContainer">
        {this.props.results.map(result => (
          <Result key={result.brand} data={result} />
        ))}
        <img
          src={
            this.props.results.length > 0
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
