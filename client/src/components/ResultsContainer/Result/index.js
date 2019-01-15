import React from "react";
import "./index.css";
import { Row, Col } from "react-bootstrap";

export default class Result extends React.Component {
  constructor(props) {
    super(props);
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect() {
    window.location.href =
      "lyft://ridetype?id=lyft&pickup[latitude]=37.764728&pickup[longitude]=-122.422999&destination[latitude]=37.7763592&destination[longitude]=-122.4242038";
  }
  render() {
    return (
      <div onClick={this.handleSelect} className="result">
        <img
          src={require(`./${this.props.data.rideService}.png`)}
          className="rideService"
        />
        <div className="priceData">{this.props.data.priceData.price}</div>
        <div className="average"> AVG </div>
      </div>
    );
  }
}
