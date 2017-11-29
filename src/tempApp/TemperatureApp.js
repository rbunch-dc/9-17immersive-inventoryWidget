import React, { Component } from 'react';
import BoilingVerdict from './BoilingVerdict';
import TemperatureInput from './TemperatureInput';

// Two utiltiy functions that are NOT part of the component.
// These are simply JS 101 functions.
function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}
// Try convert is going to take care of when the user
// enters something that isn't a number.
// it EXPECTS convert to be a funciton, specifically, one fo the
// functions above
function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return 'What is your problem?';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

class TemperatureApp extends Component{
	constructor(){
		super();
		this.state = {
			temperature: ''
		}
		this.handleCelciusChange = this.handleCelciusChange.bind(this); 	
		this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
	}

	handleCelciusChange(value){
		console.log("Someone changed the Celcius Input to " + value)
	}

	handleFahrenheitChange(value){
		console.log("Someone changed the Fahrenheit Input to "+value)
	}

	render(){

		// console.log(tryConvert("sadfsdafd100",toFahrenheit));

		// var temperature = this.state.temperature;
		return(
			<div>
				<TemperatureInput scale="f" onChange={this.handleFahrenheitChange} />
				<TemperatureInput scale="c" onChange={this.handleCelciusChange} />
				{/*<BoilingVerdict celsius={parseFloat(temperature)}/>*/}
			</div>
		)
	}
}

export default TemperatureApp;