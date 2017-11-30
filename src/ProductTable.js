// import stuff other people made
import React, { Component } from 'react';

// import our own components
import safeProductData from './productData';
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';
// console.log(productData);

class ProductTable extends Component{
	constructor(){
		super();
		this.productData = safeProductData;
		this.state = {
			productsByCategory: {}
		}
	}

	componentWillMount(){
		this.formatData();
	}

	componentWillReceiveProps(newProps){
		console.log(newProps);
		const searchTerm = newProps.searchTerm.toLowerCase();
		var tempProducts = [];
		for(let i = 0; i < safeProductData.data.length; i++ ){
			const item = safeProductData.data[i];
			const itemName = item.name.toLowerCase();
			// console.log(itemName)
			if(itemName.indexOf(searchTerm) !== -1){
				tempProducts.push(item)
			}			
		}
		console.log(safeProductData.data);
		this.productData.data = tempProducts;
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

		// console.log(this.props.searchTerm);
		// this.setState({
		// 	products: {}
		// })


		// Init a local var to hold our product rows
		var rows = [];
		// Outter for loop, is going through teh categories.
		// I.e, "Sporting Goods", and "Electronics"
		// It will run as many times as there are categories
		for(var key in this.state.productsByCategory){
			// console.log(key1);
			// console.log(this.state.productsByCategory[key]);
			rows.push(<ProductCategoryRow key={key} header={key} />);
			// Internal map through THIS category.
			this.state.productsByCategory[key].map((item,index)=>{
				rows.push(<ProductRow key={item.name} item={item} />)
			});
		};
		return (
			<div className="product-table">
				<table className="table table-striped">
					<thead>
						<tr>
							<th>Name</th>
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