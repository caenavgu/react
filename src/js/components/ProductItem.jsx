/*
*   Modules dependencies
*/
import React from 'react';


export class ProductItem extends React.Component{

  render(){
    

      return (<div  className="card">
                <img className="card-img-top" src={this.props.data.URL} alt="Card image cap" />
                <div className="card-block">
                  <h4 className="card-title">{this.props.data.title}</h4>
                  <p className="card-text">{this.props.data.information}</p>
                </div>
              </div>)
    
    }
}