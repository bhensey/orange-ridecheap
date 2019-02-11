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
      this.callOnComplete()
      if(this.state.start){
        this.props.updateStart(location)
      }
    });
  }

  setEnd(location) {
    this.setState({ end: location }, () => {
      this.callOnComplete()
      if(this.state.end){
        this.props.updateEnd(location)

      }
    });
  }

  callOnComplete() {
    if (this.state.start && this.state.end) {
      this.props.onGo(this.state.start, this.state.end);
      let avglat = ((this.state.start.location.lat + this.state.end.location.lat) / 2);
      let avglng = ((this.state.start.location.lng + this.state.end.location.lng) / 2);
      this.props.updateCenter({lat: avglat, lng:avglng})    
    }
  }

  removeStartLocation() {
    this.setState({
      start: null
    }, () => {
      this.props.reset()
    })
  }

  removeEndLocation() {
    this.setState({
      end: null
    }, () => {
      this.props.reset()
    })
  }

  render() {
    return (
      <div className="placesContainer">
        <PlacePicker removeLocation={this.removeStartLocation} setLocation={this.setStart} placeholder="Pick-up" />
        <PlacePicker removeLocation={this.removeEndLocation} setLocation={this.setEnd} placeholder="Drop-off" />
      </div>
    );
  }
}
