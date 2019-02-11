import React, { Component } from "react";
import PlacePicker from "./PlacePicker";
import "./index.css";

export default class PlacesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { start: null, end: null };
    this.setStart = this.setStart.bind(this);
    this.setEnd = this.setEnd.bind(this);
    this.removeEndLocation = this.removeEndLocation.bind(this);
    this.removeStartLocation = this.removeStartLocation.bind(this);
    this.callOnComplete = this.callOnComplete.bind(this);
  }

  setStart(location) {
    this.setState({ start: location }, () => {
      this.callOnComplete();
      this.props.updateStart(location);
    });
  }

  setEnd(location) {
    this.setState({ end: location }, () => {
      this.callOnComplete();
      this.props.updateEnd(location);
    });
  }

  callOnComplete() {
    if (this.state.start && this.state.end) {
      this.props.onGo(this.state.start, this.state.end);
    }
  }

  removeStartLocation() {
    this.setState(
      {
        start: null
      },
      () => {
        this.props.updateStart(null);
      }
    );
  }

  removeEndLocation() {
    this.setState(
      {
        end: null
      },
      () => {
        this.props.updateEnd(null);
      }
    );
  }

  render() {
    return (
      <div className="placesContainer">
        <PlacePicker
          removeLocation={this.removeStartLocation}
          setLocation={this.setStart}
          placeholder="Pick-up"
        />
        <PlacePicker
          removeLocation={this.removeEndLocation}
          setLocation={this.setEnd}
          placeholder="Drop-off"
        />
      </div>
    );
  }
}
