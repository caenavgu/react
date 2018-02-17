/*
*   Modules dependencies
*/
import React from 'react';
import {ProductItem} from './ProductItem';


export class Productscard extends React.Component{
    
  constructor() {
    super();
    
    this.state = {
       products : [
                  {URL:'/src/img/homeProducts/product-shirt-panda.png', title: 'pants', information: 'sfsdfasdflksdfjasd;lkadf', price: 100}, 
                  {URL:'/src/img/homeProducts/product-shirt-bsod.png', title: 'shoes', information: 'sfsdfasdflkgfdsgsdfgsdfjasd;lkadf', price: 100},
                  {URL:'/src/img/homeProducts/product-shirt-password.png', title: 'sox', information: 'sfsdfasdflksdgsdfgsdfgfjasd;lkadf', price: 100},
                  {URL:'/src/img/homeProducts/product-shirt-password.png', title: 'sox', information: 'sfsdfasdflksdgsdfgsdfgfjasd;lkadf', price: 100},
                  {URL:'/src/img/homeProducts/product-shirt-password.png', title: 'sox', information: 'sfsdfasdflksdgsdfgsdfgfjasd;lkadf', price: 100}
                  ],
    }
  }

  render(){
    
    const productsAsHTMLElemetns = this.state.products.map((product, i) => {
      // expression goes here:
      return (<ProductItem key={i} data={product} />)
      });
    
      return(
          <div className="card-deck"> {productsAsHTMLElemetns} </div>
      );
      
    }
}