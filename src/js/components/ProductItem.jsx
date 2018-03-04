/*
*   Modules dependencies
*/
import React from 'react';
import { Link } from 'react-router-dom';
/*  EXPORT  */
export class ProductItem extends React.Component{

  render(){
    
    return(<div id={this.props.data.id} className={this.props.border=="all" ? "card img-thumbnail border m-0" : "card img-thumbnail border-0"}>
            <Link to={"ProductPage/"+this.props.data.id}> 
              {/*<a>{this.props.data.id}</a>*/}
              <img className="card-img-top" src={this.props.data.url_image_product}  alt="Card image cap" />
              <div className="card-body text-muted p-0 m-0">
                <h5 className={this.props.align=="center" ? "card-text text-center font-weight-bold" : "card-text text-left font-weight-bold"} id="productTitle" style={{margin:'2px'}}>{this.props.data.name_product}</h5><br></br>
                <p className={this.props.align=="center" ? "card-text text-center" : "card-text text-left"}  id="productPrice">${this.props.data.price_product}</p>
              </div>
            </Link>
          </div>
          );
  }
}