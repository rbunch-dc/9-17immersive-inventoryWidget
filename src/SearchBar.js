// Import stuff other people made...
import React, { Component } from 'react';

// We are making a new Component. This Component is a class, but 
// also a subclass of the React.Component
class SearchBar extends Component{
	constructor(){
		super();
		// this.state = {
		// 	searchTerm: ""
		// }
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e){
		console.log("Filter changed... "  + e.target.value);
		// this.setState({
		// 	searchTerm: e.target.value
		// });
		this.props.onChange(e.target.value);
	}


	// EVERY component MUST have a render method (Excpet the dumb ones)
	render(){
		const searchTerm = this.props.searchTerm
		return(
			<form className="search-bar">
				<input value={searchTerm} onChange={this.handleChange} type="text" placeholder="Search..." />
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