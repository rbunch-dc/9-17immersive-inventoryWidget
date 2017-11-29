
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

class App extends Component {
  render() {
    return (
      <div className="App container">
        <SearchBar />
        <ProductTable />
      </div>
    );
  }
}

export default App;
