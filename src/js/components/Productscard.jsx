/*
*   Modules dependencies
*/
import React from 'react';
import {ProductItem} from './ProductItem';

export class Productscard extends React.Component{
  
  render(){
    const productsAsHTMLElements = this.props.data.map((product, i) => {
      // expression goes here:
      { if(i<4){
          return (
            <div className="col-xs-3 p-0 m-3 mx-auto">
              <ProductItem key={i} data={product} align={"center"} border={"all"} />
            </div>  
              );
        }
      }
    });
    
      return(
        <div className='container-fluid no-gutters'>
          <div className="card-deck row py-3">
              {productsAsHTMLElements}
          </div>  
        </div>
      );
      
    }
}