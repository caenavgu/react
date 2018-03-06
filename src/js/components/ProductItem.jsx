/*
*   Modules dependencies
*/
import React from 'react';
import { Link } from 'react-router-dom';
/*  EXPORT  */
export class ProductItem extends React.Component{

  render(){
    
    return(<div id={this.props.data.id} className={this.props.border=="all" ? "card img-thumbnail border col-md-3" : "card img-thumbnail border-0"} style={{padding: '10px', margin:'8px'}}>
            <Link to={"ProductPage/"+this.props.data.id}> 
              {/*<a>{this.props.data.id}</a>*/}
              <img className="card-img-top p-4" src={this.props.data.url_image_product}  alt="Card image cap" />
              <div className="card-body text-muted" style={{ paddingTop: '0px', paddingBottom: '0px'}}>
                <p className={this.props.align=="center" ? "card-text text-center font-weight-bold h6" : "card-text text-left font-weight-bold h5"} id="productTitle" style={{margin:'2px'}}>{this.props.data.name_product}</p>
                <p className={this.props.align=="center" ? "card-text text-center" : "card-text text-left"}  id="productPrice">{this.props.data.price_product} $</p>
              </div>
            </Link>
          </div>
          );
  }
}