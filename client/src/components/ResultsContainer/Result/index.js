import React from "react";
import "./index.css";

export default class Result extends React.Component {
  constructor(props) {
    super(props);
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect() {
    window.location.href = this.props.data.link;
  }
  render() {
    return (
      <div onClick={this.handleSelect} className="result">
        <img
          src={require(`../../../static/${this.props.data.brand}.png`)}
          className="rideService"
          alt={this.props.data.brand}
        />
        <div className="priceData">{`$${this.props.data.avg_estimate} `}</div>
        <div className="average"> AVG </div>
      </div>
    );
  }
}
