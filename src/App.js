
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

class App extends Component {
	constructor(){
		super();
		this.state = {
			searchTerm: ""
		}
		this.handleFilterChange = this.handleFilterChange.bind(this);
	}

	handleFilterChange(newValue){
		this.setState({
			searchTerm: newValue
		});
		console.log("My child component ran me!")
	}

  render() {
  	const searchTerm = this.state.searchTerm;
    return (
      <div className="App container">
        <SearchBar searchTerm={searchTerm} onChange={this.handleFilterChange} />
        <ProductTable searchTerm={searchTerm} />
      </div>
    );
  }
}

export default App;
