// I'm dumb. Thinking Hard.
// We still need react. we dont need component, because 
// its not going to be a class. BUT, react still needs to make
// it a component.
import React from 'react';

function ProductCategoryRow(props){
	return(
		<tr>
			<th>{props.header}</th>
		</tr>
	)
}

export default ProductCategoryRow;