/*
*   Modules dependencies
*/
import React from 'react';

export class CategoryArea extends React.Component{
  
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
    
    return(
      <div className='container'>
        
      </div>
      
 
    );  
  }
    
}