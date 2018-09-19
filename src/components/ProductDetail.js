import React, { Component } from "react";
 
class ProductDetail extends Component {
  constructor(props)
  {
      super(props);
      this.toggleContent = this.toggleContent.bind(this);
      this.state = {
      showDetails: true
      }
  }
  toggleContent(event)
  {
      event.preventDefault()
      this.setState({showDetails: !this.state.showDetails})
  }
  render() {
    const {product} = this.props
    //const product = this.props.product;
    const {showDetails} = this.state
    return (
      <div class="col-sm-3">
       <img width="200" height="200" src={require('../image/tech.jpg')} />
        	  	<h6>{product.id}</h6>
        	  	<h6>{product.name}</h6>
              {showDetails===true?<p>{product.detail}</p>:''
              }
              <button class="btn-success" onClick={this.toggleContent}>Description</button>
      </div>
    );
  }
}
 
export default ProductDetail;