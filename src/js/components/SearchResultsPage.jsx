import React from 'react';
import {ProductItem} from './ProductItem';

export class SearchResults extends React.Component{
    
  render(){
    const productsAsHTMLElements = this.props.data.map((product, i) => {
      // expression goes here:
      { if(i<4){
          return (<ProductItem key={i} data={product} align={"center"} border={"all"} />);
        }
      }
    });
    
      return(
        <div className='container-fluid'>
          <div className="card-deck row"> {productsAsHTMLElements} </div>
          <div><h1>SEARCJ RESSULT</h1></div>
        </div>
      );
      
    }
}