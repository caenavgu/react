import React from 'react';

export class ProductMain extends React.Component{

    render(){
        return(
            <div className='container'>
                <div className='row border-bottom'>
                    <div className="col-6 mx-auto">
                        <div className="row">
                            <div className='col-xs-6 mr-1'>
                                <img src={this.props.data.url_image_product} className="img-responsive"/>
                            </div>
                            <div className='col-xs-6 pt-3'>
                                <h1>{this.props.data.name_product}</h1>
                                <h3>Brand: {this.props.data.name_brand}</h3>
                                <h3>Price: {this.props.data.price_product}</h3>
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
            );
    }
}