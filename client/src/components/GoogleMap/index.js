import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Icon from '@material-ui/core/Icon';

class SimpleMap extends Component {
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyB6WxBLgtBadFQ7lJw6GXcYhQ1L-1CKFjo" }}
          center={this.props.center}
          zoom={this.props.zoom}>
            <Icon lat={42.057858} lng={-87.675837}>
                place
            </Icon>
            <Icon lat={41.8789} lng={-87.6359}>
                place
            </Icon>
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;