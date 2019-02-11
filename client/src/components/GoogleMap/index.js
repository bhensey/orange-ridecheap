import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import Icon from "@material-ui/core/Icon";

class SimpleMap extends Component {
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: "100vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyB6WxBLgtBadFQ7lJw6GXcYhQ1L-1CKFjo" }}
          center={this.props.center}
          zoom={this.props.zoom}
        >
          {this.props.start ? (
            <Icon lat={this.props.start.lat} lng={this.props.start.lng}>
              place
            </Icon>
          ) : null}
          {this.props.end ? (
            <Icon lat={this.props.end.lat} lng={this.props.end.lng}>
              place
            </Icon>
          ) : null}
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
