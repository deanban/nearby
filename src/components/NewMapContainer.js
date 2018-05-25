import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import React, { Component } from 'react';


export class NewMapContainer extends Component {

	state = {
    	lat:0,
    	lng:0
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
        lat: pos.coords.latitude, lng: pos.coords.longitude
      }, () => console.log(this.state));
  }


  render() {
  	this.getLocation()
    return (
      <Map google={this.props.google} zoom={14}
      center={{ lat: this.state.lat, lng: this.state.lng }}
      >

        <Marker
	        name="Current Location"
	        position={{ lat: this.state.lat, lng: this.state.lng }}
	        title="The marker`s title will appear as a tooltip."
      />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyAF3laRwdxS7LqBHaCP5UbQX-ZKOOTFPwE"
})(NewMapContainer)
