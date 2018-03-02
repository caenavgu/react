import React from 'react';
import {ProductItem} from './ProductItem';
import { Link } from 'react-router-dom';

export class SearchResults extends React.Component{
    
  render(){

      return(
        <div className='container-fluid'>
          <div class="container">
            <div class="row">
              <div class="col-xs-6 mx-auto">
                
                <div class="row">
                  <div class="col-xs-6">
                    <img src={this.props.data.url_image_product} class="img-responsive" />
                  </div>
                  <div class="col-xs-6 p-3 align-middle">
                    <h2>{this.props.data.name_product}</h2>
                    <p>{this.props.data.name_brand}</p>
                    <p>{this.props.data.price_product}</p>
                    <p><Link to={"ProductPage/"+this.props.data.id}><button class="btn btn-primary btn-success"><span class="glyphicon glyphicon-play"></span> More Info</button></Link></p>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
      </div>  
      );
      
    }
}