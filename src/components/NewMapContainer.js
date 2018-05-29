import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import React, { Component } from 'react';

export class NewMapContainer extends Component {



	// state = {
 //    	lat:0,
 //    	lng:0
 //  }


  // getLocation = () => {
  //     if (navigator.geolocation) {
  //         navigator.geolocation.getCurrentPosition(this.success)
  //     } else {
  //         console.log("Geolocation is not supported by this browser.")
  //     }
  // }
  // success = (pos) => {
  //     console.log(pos.coords)
  //     this.setState({
  //       lat: pos.coords.latitude, lng: pos.coords.longitude
  //     }, () => console.log(this.state));
  // }

  render() {
    console.log(this.props)
    return (
      <div>
      <Map google={this.props.google} zoom={14}
      center={{ lat: this.props.lat, lng: this.props.lng }}
      >

        <Marker
	        name="Current Location"
	        position={{ lat: this.props.lat, lng: this.props.lng }}
	        title="The marker`s title will appear as a tooltip."
      />
      </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyAF3laRwdxS7LqBHaCP5UbQX-ZKOOTFPwE"
})(NewMapContainer)
