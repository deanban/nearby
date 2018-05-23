import {GoogleMapReact, Marker} from 'google-map-react';
import React from 'react';

export default class MapContainer extends React.Component {

  state = {
    center: {lat: 30, lng: 50}
  }

  getLocation = () => {
      if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(this.success)
      } else {
          console.log("Geolocation is not supported by this browser.")
      }
  }
  success = (pos) => {
      console.log(pos.coords)
      this.setState({
        center: {lat: pos.coords.latitude, lng: pos.coords.longitude}
      }, () => console.log(this.state));
  }

 // static defaultProps = {
 //    center: {lat: 59.95, lng: 30.33},
 //    zoom: 11
 //  };

  render() {
    this.getLocation();
    console.log('in render', this.state.center)
    return (
      <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
      bootstrapURLKeys={{
        key: "AIzaSyAF3laRwdxS7LqBHaCP5UbQX-ZKOOTFPwE"
      }}
        center={this.state.center}
        defaultZoom={18}
      >
      <Marker lat={this.state.center.lat} lng={this.state.center.lng} />
      </GoogleMapReact>
      </div>
    );
  }
  }


