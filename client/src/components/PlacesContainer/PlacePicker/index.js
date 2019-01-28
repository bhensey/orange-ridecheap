import Geosuggest from "react-geosuggest";
import React, { Component } from "react";
import "./index.css";
import Fab from '@material-ui/core/Fab';


export default class PlacePicker extends Component {

  onClear(){
    this.props.removeLocation()
    this._geoSuggest.clear()
  }

  render() {
    return (
      <div className="search">
        <Geosuggest
          ref={el=>this._geoSuggest=el}
          onChange={this.props.removeLocation}
          onSuggestSelect={this.props.setLocation}
          placeholder={this.props.placeholder}
        />
        <Fab className="clear" onClick={()=>this.onClear()} size ='small'><i class="material-icons">close</i></Fab>
      </div>
    );
  }
}
