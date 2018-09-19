import React, { Component } from "react";
import mydata from "../data/data.json";

function searchHandler(nameValue)
{
  return function(x)
  {
    return x.name.toLowerCase().includes(nameValue.toLowerCase())||!nameValue;
  }
  
}
class Home extends Component {
  constructor(props)
  {
    super(props);
    this.state={
      mydata:mydata,
      searchByName:''
    }
   this.searchHandler=this.searchHandler.bind(this);

  }
  searchHandler(event)
  {
    //alert("searchHandler");
    this.setState({searchByName:event.target.value});
  }
  render() {
    const {searchByName,mydata} = this.state;
    return (
      <div>
        <form>
          <p>Search a dev Product</p>
            <input type="text" placeholder="Type preferred name"
            onChange={this.searchHandler}/>
        </form>
        <h2>Devs loaded from a typical json</h2>
        <div class="row">
            
              {
                mydata.filter(searchHandler(searchByName)).map(data=>
                <div key={data.id}>
                <div class="col-sm-6">
                <img class="img-rounded" alt="Cinque Terre" width="200" height="200" src={require('../image/tech.jpg')}/>
                    <b>Dev ID:{data.id}</b>
                    <h1>{data.name}</h1>
                    {data.detail}
                    
                </div>
                 </div>
                )
              }
           
          </div>
 
        <h3>Aim developing a single page application</h3>
 
        <p>Function: It has to list products on a digital store.products will later be loaded from a database
        .Currently products are loaded from a typical json file. Fuctions to be supported are filtering , sorting
        of all products according to their category. Node will be preferred as the backend language to use for 
        purpose of learning node.js</p>
      </div>
    );
  }
}
 
export default Home;