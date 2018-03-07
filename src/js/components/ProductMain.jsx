import React from 'react';
import { Link } from 'react-router-dom';

export class ProductMain extends React.Component{

    render(){
        return(
            <div className='container'>
<<<<<<< HEAD
                <div className='row border-bottom'>
                    <div className="col-8 mx-auto">
                        <div className="row">
                            <div className='col-xs-6 mr-1'>
                                <img src={this.props.data.url_image_product} className="img-fluid"/>
                            </div>
                            <div className='col-xs-6 pt-3'>
                                <h1>{this.props.data.name_product}</h1>
                                <p class="font-weight-light">{this.props.data.name_brand}</p>
                                <h3>${this.props.data.price_product}</h3>
                                    <a>Quantity:
                                    <select className='item-qty'> 
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                    </select>
                                    </a>
                                <p className="pt-4">
                                    <button className="btn btn-success btn-lg item-add-button" type="submit"><span className="glyphicon glyphicon-edit"></span><i className="fas fa-shopping-cart"></i>     Add to Cart</button> 
                                </p>
                            </div>
                        </div>
                        <div className='row border-bottom'>
                            <div className='col-12 p-4 mx-auto'>
                                <h4 className='row border-bottom'>{this.props.data.name_product}</h4>
                                <p className='row border-bottom'>{this.props.data.description_product}</p>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
=======
               <div className='row border-bottom'>
                 <div className='col-md-4'>
                   <img src={this.props.data.url_image_product} />
                 </div>
                 <div className='col-md-8'>
                   <h1 className='row border-bottom'>{this.props.data.name_product}</h1>
                  {/*<h4 className='text-muted'>{this.props.data.product_tags}</h4>-->*/}
                   <h2>Brand: {this.props.data.name_brand}</h2>
                   <h3>Price: {this.props.data.price_product} $</h3>
                   <p>
                        <a>Quantity:
                         <select className='item-qty'> 
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                          </select>
                        </a>
                    </p>
                    <p>
                      <button className="btn btn-success btn-lg item-add-button" type="submit"><span className="glyphicon glyphicon-edit"></span><i className="fas fa-shopping-cart"></i>     Add to Cart</button><br></br>
                    </p>
                 </div>
              </div>
              <div className='row'>
                <h1>{this.props.data.name_product}</h1><br></br>
                <p>{this.props.data.description_product} </p>
              </div>
            </div>
>>>>>>> 02c751923d7529e05482b0016598d796ebd348d1
            );
    }
}