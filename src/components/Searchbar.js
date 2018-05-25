import React from 'react'

export default class Searchbar extends React.Component{

	componentDidMount(){
		fetch("https://maps.googleapis.com/maps/api/place/radarsearch/json?location=48.859294,2.347589&radius=5000&type=park&key=AIzaSyAF3laRwdxS7LqBHaCP5UbQX-ZKOOTFPwE")
		.then(resp => resp.json())
		.then((json) => {

		})

	}
	 render(){
		  return(
				<div className="search" >
					<form>


			          <input type="text" placeholder="search here"/>

			        <input type="submit" value="Submit" />
			      </form>
				</div>
		  );
	 }
}
