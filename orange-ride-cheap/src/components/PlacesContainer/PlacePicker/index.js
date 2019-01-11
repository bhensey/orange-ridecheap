import Geosuggest from 'react-geosuggest';
import React, {Component} from 'react';
import "./index.css";

export default class PlacePicker extends Component{
  constructor(props){
    super(props)
    this.state = {
      selectedLocation: null,
    }
    this.onSuggestSelect = this.onSuggestSelect.bind(this)
  }

  onSuggestSelect(suggest){
    this.setState({
      selectedLocation: suggest
    })
  }

  render(){

    return(
      <div>
        <Geosuggest
          onSuggestSelect = {this.onSuggestSelect}
          />
        {
          this.state.selectedLocation &&
          <div>
            <h1>{this.state.selectedLocation.label}</h1>
            <h1>{this.state.selectedLocation.location.lat}</h1>
            <h1>{this.state.selectedLocation.location.lng}</h1>
          </div>
        }
      </div>
    )
  }
}
