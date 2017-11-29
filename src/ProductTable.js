// import stuff other people made
import React, { Component } from 'react';

// import our own components
import productData from './productData';
import ProductCategoryRow from './ProductCategoryRow';
// console.log(productData);

class ProductTable extends Component{
	constructor(){
		super();
		this.productData = productData;
		this.state = {
			productsByCategory: {}
		}
	}

	componentWillMount(){
		this.formatData();
	}

	formatData(){
		var tempProducts = {};
		this.productData.data.map((product)=>{
			// console.log(product.category);
			if(tempProducts[product.category] === undefined){
				tempProducts[product.category] = [];
			}
			tempProducts[product.category].push(product);
		});
		console.log(tempProducts);
		this.setState({
			productsByCategory: tempProducts
		})
	}

	render(){
		// Init a local var to hold our product rows
		var rows = [];
		for(var key in this.state.productsByCategory){
			// console.log(key1);
			console.log(this.state.productsByCategory[key]);
			rows.push(<ProductCategoryRow header={key} />);
		}
		return (
			<div className="product-table">
				<table className="table table-striped">
					<thead>
						<tr>
							<th>Head</th>
							<th>Price</th>
						</tr>
					</thead>
					<tbody>
					{/*products go here*/}
					{rows}
					</tbody>
				</table>
			</div>
		);
	};
};

export default ProductTable;