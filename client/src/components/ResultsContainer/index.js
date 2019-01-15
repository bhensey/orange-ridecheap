import React from "react";
import Result from "./Result";
import "./index.css";

export default class ResultsContainer extends React.Component {
  render() {
    let resultData = [
      { rideService: "Uber", priceData: { price: "$24.43" } },
      { rideService: "Lyft", priceData: { price: "$25.12" } }
    ];
    return (
      <div className="resultsContainer">
        {resultData.map(result => (
          <Result data={result} />
        ))}
      </div>
    );
  }
}
