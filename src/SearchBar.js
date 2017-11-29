// Import stuff other people made...
import React, { Component } from 'react';

// We are making a new Component. This Component is a class, but 
// also a subclass of the React.Component
class SearchBar extends Component{
	// EVERY component MUST have a render method (Excpet the dumb ones)
	render(){
		return(
			<form className="search-bar">
				<input type="text" placeholder="Search..." />
				<div>
					<input id="in-stock" type="checkbox" /> Only show products in stock
				</div>
			</form>
		)
	}
}

// We need to export the class so that whoever imports it (app.js)
// will know what to import
export default SearchBar