import React, { Component } from "react";
import Product from "./ProductDetail";
import Data from "../data/data.json";
 
class ProductList extends Component {
  render() {
    return (
      <div class="row">
      		{
        	Data.map((product,index)=>{
        	  return  <Product product={product} key={'product-list-key ${index}'}/>
         		}
         		)
         	}

      </div>
    );
  }
}
 
export default ProductList;