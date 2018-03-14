import React from 'react';
import {ProductMain} from '../components/ProductMain';

export class Cart extends React.Component{
    
constructor () {
    super ();
}
    
    render(){
        
        return(
<div className="container">
    <div className="row">
        <div className="col-xs-8 mx-auto">
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th className="text-center">Price</th>
                        <th className="text-center">Total</th>
                        <th> </th>
                    </tr>
                </thead>
                
                <tbody>
                    <tr>
                        <td className="mx-auto">
                            <div className="media">
                                <a className="thumbnail pull-left p-2" href="#"><img className="media-object" src="https://i.imgur.com/CnmdnIN.jpg" /></a>
                                    <div className="media-body">
                                        <h4 className="media-heading"><a href="#">Python Shirt</a></h4>
                                        <h5 className="media-heading"> by <a href="#">DevShui Tech</a></h5>
                                        <span>Status: </span><span class="text-success"><strong>In Stock</strong></span>
                                    </div>
                            </div>
                        </td>
                        <td className="col-sm-1 col-md-1">
                            <input type='button'/>

                        </td>
                        <td className="col-sm-1 col-md-1 text-center">
                            <strong>$ 14.99</strong>
                        </td>
                        <td className="col-sm-1 col-md-1 text-center">
                            <strong>$14.99</strong>
                        </td>
                        <td className="col-sm-1 col-md-1">
                            <button type="button" className="btn btn-danger"><span className="glyphicon glyphicon-remove"></span>Remove</button>
                        </td>
                    </tr>
                    <tr>
                        <td className="row">
                            <div className="col-1">
                                <tr>
                                    <td>   </td>
                                    <td>   </td>
                                    <td>   </td>
                                    <td><h5>Subtotal</h5></td>
                                    <td className="text-right"><h5><strong>$14.99</strong></h5></td>
                                </tr>
                                <tr>
                                    <td>   </td>
                                    <td>   </td>
                                    <td>   </td>
                                    <td><h5>Estimated shipping</h5></td>
                                    <td className="text-right"><h5><strong>$6.94</strong></h5></td>
                                </tr>
                                <tr>
                                    <td>   </td>
                                    <td>   </td>
                                    <td>   </td>
                                    <td><h3>Total</h3></td>
                                    <td className="text-right"><h3><strong>$21.93</strong></h3></td>
                                </tr>
                                <tr>
                                    <td>   </td>
                                    <td>   </td>
                                    <td>   </td>
                                    <td>
                                        <button type="button" class="btn btn-default"><span className="glyphicon glyphicon-shopping-cart"></span> Continue Shopping</button>
                                    </td>
                                    <td><button type="button" className="btn btn-success">Checkout <span className="glyphicon glyphicon-play"></span></button></td>
                                </tr>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>


 
            );
    }
    
}