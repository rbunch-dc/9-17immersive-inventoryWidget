import React, { Component } from 'react';

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
};

class TemperatureInput extends Component{
	constructor(props){
		super(props);
		// this.state = {
		// 	temperature: ''
		// };
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event){
		this.props.onChange(event.target.value);
	}	

	render(){

		// Mom and dad sent me the temperature I'm supposed to use
		const temperature = this.props.temperature;
		return(
			<div>
				<legend>Scale: {scaleNames[this.props.scale]}</legend>
				<input value={temperature} onChange={this.handleChange} />
			</div>
		)
	}
}

export default TemperatureInput;