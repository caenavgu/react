/*
*   Modules dependencies
*/
import React from 'react';
import mainStore from '../stores/mainStore.js';
import {ProductItem} from './ProductItem';


export class Productscard extends React.Component{
  render(){
    const productsAsHTMLElemetns = this.props.data.map((product, i) => {
      // expression goes here:
      return (<ProductItem key={i} data={product} align={"center"}/>)
      });
    
      return(
        <div>
          <div className="card-deck"> {productsAsHTMLElemetns} </div>
          <div><h1>Hello</h1></div>
        </div>
      );
      
    }
}