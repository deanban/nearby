import React from 'react'

export default class Searchbar extends React.Component{
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
