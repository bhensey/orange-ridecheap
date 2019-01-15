import React from "react";
import Result from "./Result";

export default class ResultsContainer extends React.Component {
  render() {
    let resultData = [
      { rideService: "Uber", priceData: { price: 24 } },
      { rideService: "Lyft", priceData: { price: 25 } }
    ];
    return (
      <div>
        {resultData.map(result => (
          <Result data={result} />
        ))}
      </div>
    );
  }
}
