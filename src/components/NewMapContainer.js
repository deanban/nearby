import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import React, { Component } from 'react';

export class NewMapContainer extends Component {

	state = {
    	lat:0,
    	lng:0,
			markerPostions:[]
  }

  componentWillMount(){
      if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(this.success)
      } else {
          console.log("Geolocation is not supported by this browser.")
      }
  }
	//
	success = (pos) => {
      console.log(pos.coords)
      this.setState({
        lat: pos.coords.latitude, lng: pos.coords.longitude
      });
			this.fetchNearby()
  }

	fetchNearby = () => {
		let url = `https://maps.googleapis.com/maps/api/place/radarsearch/json?location=${this.state.lat},${this.state.lng}&radius=100&type=${this.props.searchStr}&keyword=${this.props.typeStr}&key=AIzaSyAF3laRwdxS7LqBHaCP5UbQX-ZKOOTFPwE`
		// console.log('in map', url)
		fetch(url)
		.then(resp => resp.json())
		.then(data => this.setState({markerPostions: data.results}))
	}

	renderNearby = () => {
		return(
			<Map google={this.props.google} zoom={14}
      center={{ lat: this.state.lat, lng: this.state.lng }}
      >
			{this.state.markerPostions.map((x, index) =>
				<Marker
	        name="Current Location"
	        position={{ lat: x.geometry.location.lat, lng: x.geometry.location.lng }}
	        title="The marker`s title will appear as a tooltip."
        />
			)}
		</Map>
		)
	}

  render() {
    console.log('in map container', this.state)
		// this.getLocation()
    return (
      <div>
      	{this.renderNearby()}
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyAF3laRwdxS7LqBHaCP5UbQX-ZKOOTFPwE"
})(NewMapContainer)
