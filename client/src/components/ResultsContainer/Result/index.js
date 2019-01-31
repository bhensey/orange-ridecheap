import React from "react";
import "./index.css";
import Button from "@material-ui/core/Button"
import Grow from "@material-ui/core/Grow"

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
      <Grow in={true}>
        <Button
          color={this.props.data.brand == "Lyft" ? "primary" : "secondary"}
          variant="contained"
          onClick={this.handleSelect}
          className="result"
          size="small"
        >
        <div className="request">REQUEST</div>
          <img
            src={require(`../../../static/${this.props.data.brand}.png`)}
            className="rideService"
            alt={this.props.data.brand}
          />
          <div className="rideName">{this.props.data.name}:</div>
          <div className="priceData">{`$${this.props.data.avg_estimate} `}</div>
          <div className="average"> AVG </div>
        </Button>
      </Grow>
    );
  }
}
