import React, {Component} from 'react';
import PlacePicker from './PlacePicker';

export default class PlacesContainer extends Component{
  render(){
    return(
      <div>
        <PlacePicker />
        <PlacePicker />
      </div>
    )
  }
}
