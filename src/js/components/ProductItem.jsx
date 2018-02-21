/*
*   Modules dependencies
*/
import React from 'react';


export class ProductItem extends React.Component{

  render(){
    
    return(<div className="card img-thumbnail border-0" style={{padding: '10px'}}>
              <img className="card-img-top" src={this.props.data.URLImage} alt="Card image cap" />
              <div className="card-body text-muted" style={{ paddingTop: '0px', paddingBottom: '0px'}}>
                <h5 className={this.props.align=="center" ? "card-text text-center font-weight-bold" : "card-text text-left font-weight-bold"} id="productTitle" style={{margin:'2px'}}>{this.props.data.title}</h5>
                <p className={this.props.align=="center" ? "card-text text-center" : "card-text text-left"}  id="productPrice">{this.props.data.price}</p>
              </div>
            </div>
          )
  }
}