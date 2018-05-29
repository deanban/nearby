import React from 'react'
import NewMapContainer from './NewMapContainer'

export default class Searchbar extends React.Component{

	state = {
		searchStr: "",
		currentLat:0,
		currentLng:0,

	}

	componentWillMount() {
      if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(this.success)
      } else {
          console.log("Geolocation is not supported by this browser.")
      }
  	}

	success = (pos) => {
		// console.log(pos.coords)
	    this.setState({
	      lat: pos.coords.latitude, lng: pos.coords.longitude
	    });
	}

	handleChange = (event) => {
		console.log(event.target.value)
		this.setState({
			searchStr: event.target.value
		})
	}

	handleSubmit = (event) =>{
		event.preventDefault()
		debugger
		fetch(`https://maps.googleapis.com/maps/api/place/radarsearch/json?location=${this.state.currentLat},${this.state.currentLng}&radius=50&type=${this.state.searchStr}&key=AIzaSyAF3laRwdxS7LqBHaCP5UbQX-ZKOOTFPwE`)
		.then(resp => resp.json())



	}

	 render(){
	 	// this.getLocation()
		  return(

				<div className="search" >
					<form onSubmit={this.handleSubmit}>
			          <input type="text" placeholder="search here" onChange={this.handleChange}/>

			        <input type="submit" value="Submit"/>
			      </form>
			    <NewMapContainer lat={this.state.lat} lng={this.state.lng}/>
				</div>
		  );
	 }
}
