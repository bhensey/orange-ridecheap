import React from "react";
import "./index.css";
import { Row, Col } from "react-bootstrap";

export default class Result extends React.Component {
  constructor(props) {
    super(props);
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect() {
    window.location.href = "https://google.com";
  }
  render() {
    return (
      <div onClick={this.handleSelect} className="result">
        <div className="rideService">{this.props.data.rideService}</div>
        <div className="priceData">{this.props.data.priceData.price}</div>
      </div>
    );
  }
}
