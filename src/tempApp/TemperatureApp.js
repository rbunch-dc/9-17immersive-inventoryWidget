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
			temperature: 32,
			scale: "c"
		}
		this.handleCelciusChange = this.handleCelciusChange.bind(this); 	
		this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
	}

	handleCelciusChange(value){
		console.log("Someone changed the Celcius Input to " + value)
		this.setState({
			scale: "c",
			temperature: value
		})
	}

	handleFahrenheitChange(value){
		console.log("Someone changed the Fahrenheit Input to "+value)
		this.setState({
			scale: "f",
			temperature: value
		})
	}

	handleKevlinChange(value){
		this.setState({
			scale: "k",
			temperature: value
		})
	}

	render(){
		// Set up some local vars to save on typing
		const scale = this.state.scale;
		const temperature = this.state.temperature;

		if(scale === "c"){
			// Convert celcius temp to f
			var fTemp = tryConvert(temperature,toFahrenheit)
			// No need to convert, it's already in celcius
			var cTemp = temperature;
		}else if(scale === "f"){
			// no need to convert, it's already in f
			var fTemp = temperature;
			// try and convert f to celcisu
			var cTemp = tryConvert(temperature,toCelsius)
		}else if(scale === "k"){
			// no need to convert, it's already in f
			var fTemp = temperature;
			// try and convert f to celcisu
			var cTemp = tryConvert(temperature,toCelsius)
		}

		// console.log(tryConvert("sadfsdafd100",toFahrenheit));

		// var temperature = this.state.temperature;
		return(
			<div id="temp-app">
				<TemperatureInput scale="f" temperature={fTemp} onChange={this.handleFahrenheitChange} />
				<TemperatureInput scale="c" temperature={cTemp} onChange={this.handleCelciusChange} />
				<BoilingVerdict temperature={parseFloat(cTemp)}/>
			</div>
		)
	}
}

export default TemperatureApp;