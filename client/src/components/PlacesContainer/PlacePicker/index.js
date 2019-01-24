import Geosuggest from "react-geosuggest";
import React, { Component } from "react";
import "./index.css";

export default class PlacePicker extends Component {

  onClear(){
    this.props.removeLocation()
    this._geoSuggest.clear()
  }

  render() {
    return (
      <div>
        <Geosuggest
          ref={el=>this._geoSuggest=el}
          onChange={this.props.removeLocation}
          onSuggestSelect={this.props.setLocation}
          placeholder={this.props.placeholder}
        />
        <button onClick={()=>this.onClear()}>Clear</button>
      </div>
    );
  }
}
