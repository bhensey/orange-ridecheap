import React, { Component } from "react";
import PlacePicker from "./PlacePicker";
import SearchButton from "./SearchButton";
import "./index.css";

export default class PlacesContainer extends Component {
  render() {
    return (
      <div className="placesContainer">
        <PlacePicker placeholder="Start" />
        <PlacePicker placeholder="End" />
        <SearchButton />
      </div>
    );
  }
}
