import React, { Component } from 'react';
import BoilingVerdict from './BoilingVerdict';

class TemperatureApp extends Component{
	constructor(){
		super();
		this.state = {
			temperature: ''
		}
		this.handleChange = this.handleChange.bind(this); 	
	}

	handleChange(event){
		console.log(event);
		console.log(event.target.value)
		this.setState({
			temperature: event.target.value
		})
	}

	render(){
		var temperature = this.state.temperature;
		return(
			<div>
				<input value={temperature} onChange={this.handleChange} />
				<BoilingVerdict celsius={parseFloat(temperature)}/>
			</div>
		)
	}
}

export default TemperatureApp;