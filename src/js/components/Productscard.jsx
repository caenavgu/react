/*
*   Modules dependencies
*/
import React from 'react';


export class Productscard extends React.Component{
    
  constructor() {
    super();
    
    this.state = {
       products : [
                  {URL:'/src/img/homeProducts/product-shirt-panda.png', titlle: 'pants', information: 'sfsdfasdflksdfjasd;lkadf', price: 100}, 
                  {URL:'/src/img/homeProducts/product-shirt-bsod.png', titlle: 'shoes', information: 'sfsdfasdflkgfdsgsdfgsdfjasd;lkadf', price: 100},
                  {URL:'/src/img/homeProducts/product-shirt-password.png', titlle: 'sox', information: 'sfsdfasdflksdgsdfgsdfgfjasd;lkadf', price: 100},
                  {URL:'/src/img/homeProducts/product-shirt-password.png', titlle: 'sox', information: 'sfsdfasdflksdgsdfgsdfgfjasd;lkadf', price: 100},
                  {URL:'/src/img/homeProducts/product-shirt-password.png', titlle: 'sox', information: 'sfsdfasdflksdgsdfgsdfgfjasd;lkadf', price: 100}
                  ],
    }
  }

  render(){
    
    const productsAsHTMLElemetns = this.state.products.map((product, i) => {
      // expression goes here:
      return (<div key={i} className="card">
                <img className="card-img-top" src={product.URL} alt="Card image cap" />
                <div className="card-block">
                  <h4 className="card-title">{product.title}</h4>
                  <p className="card-text">{product.information}</p>
                  <p className="card-text"><small className="text-muted">Natural swag.</small></p>
                </div>
              </div>)
      });
    
      return(
          <div className="card-deck"> {productsAsHTMLElemetns} </div>
      );
      
    }
}