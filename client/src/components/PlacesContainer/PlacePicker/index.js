import Geosuggest from "react-geosuggest";
import React, { Component } from "react";
import "./index.css";

export default class PlacePicker extends Component {
  render() {
    return (
      <div>
        <Geosuggest
          onChange={this.props.removeLocation}
          onSuggestSelect={this.props.setLocation}
          placeholder={this.props.placeholder}
        />
      </div>
    );
  }
}
