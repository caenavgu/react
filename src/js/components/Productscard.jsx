/*
*   Modules dependencies
*/
import React from 'react';
import mainStore from '../stores/mainStore.js';
import {ProductItem} from './ProductItem';


export class Productscard extends React.Component{
    
  constructor() {
    super();
    
    this.state = {
       products : [{name_product: null,
                    name_brand: null,
                    description_product: null,
                    quantity_products_stock: null,
                    price_product: null,
                    product_status: null}
                  ],
    }
  }

  render(){
    
    const productsAsHTMLElemetns = this.props.data.map((product, i) => {
      // expression goes here:
      return (<ProductItem key={i} data={product} align={"center"}/>)
      });
    
      return(
          <div className="card-deck"> {productsAsHTMLElemetns} </div>
      );
      
    }
}