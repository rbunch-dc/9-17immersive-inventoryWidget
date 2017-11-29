// Presenationaal component. No need for state. 
// Just for sending back HTML based on props
import React from 'react';

function ProductRow(props){
	// WE HAVE TO RETURN A DOM ELEMENT
	var productClass = "";
	if(props.item.inStock){
		productClass = "text-success";
	}else{
		productClass = "text-danger";
	}
	return(
		<tr>
			<td className={`${productClass} col-sm-5`}>{props.item.name}</td>
			<td>{props.item.price}</td>
		</tr>
	)
}

export default ProductRow;

// class ProductRow exteneds component{
// 	render(){
// 		return(
// 		<tr>
// 			<td>{this.props.item.name}</td>
// 			<td>{this.props.item.price}</td>
// 		</tr>
// 			)
// 	}
// }