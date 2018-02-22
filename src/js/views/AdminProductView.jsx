import React from 'react';

export class AdminProductView extends React.Component{
    
  constructor() {
    super();
    
    this.state = {
        productInfo: {
            productImageURL:'/src/img/homeProducts/product-shirt-bsod.png', 
            title:'BSOD Blue Shirt (Limited Edition)', 
            price:'$20.00',
            quantity: '',
            show: true,
        } 
    }
  }
    
    render(){
        
        return(
                    
<div className="container">
    <form className="form-signin">
        <div className="container">
            <div className="row">
            <div className="col-xs-12 mx-auto">
                <div className="panel panel-default">
                <div className="panel panel-primary">
                    <h1 className="text-center">Inventory</h1>
                <div className="panel-body">
                <div>
                    <h3>+/- Products | Search Filter | Run Report</h3>
                </div>
                    <table className="table table-striped table-condensed">
                        <thead>
                            <tr>
                            <th>Product</th>
                            <th>Cost</th>
                            <th>Sales (Total)</th>
                            <th>Update</th>
                            <th>Delete</th> 
                            </tr>
                        </thead>   
                        <tbody>
                            <tr>
                                <td>{this.state.productInfo.title}</td>
                                <td>{this.state.productInfo.price}</td>
                                <td>40</td>
                                <td><a href="create-function" className="btn btn-sm btn-primary btn-block" role="button">Update</a></td>
                                <td><a href="create-function" className="btn btn-sm btn-primary btn-block" role="button">Delete</a></td>
                            </tr>
                            <tr>
                                <td>Product 2</td>
                                <td>$250.00</td>
                                <td>300</td>
                                <td><a href="create-function" className="btn btn-sm btn-primary btn-block" role="button">Update</a></td>
                                <td><a href="create-function" className="btn btn-sm btn-primary btn-block" role="button">Delete</a></td>
                            </tr>
                            <tr>
                                <td>Product 3</td>
                                <td>16.99</td>
                                <td>14</td>
                                <td><a href="create-function" className="btn btn-sm btn-primary btn-block" role="button">Update</a></td>
                                <td><a href="create-function" className="btn btn-sm btn-primary btn-block" role="button">Delete</a></td>
                            </tr>                               <tr>
                                <td>Product 3</td>
                                <td>16.99</td>
                                <td>14</td>
                                <td><a href="create-function" className="btn btn-sm btn-primary btn-block" role="button">Update</a></td>
                                <td><a href="create-function" className="btn btn-sm btn-primary btn-block" role="button">Delete</a></td>
                            </tr>                               <tr>
                                <td>Product 3</td>
                                <td>16.99</td>
                                <td>14</td>
                                <td><a href="create-function" className="btn btn-sm btn-primary btn-block" role="button">Update</a></td>
                                <td><a href="create-function" className="btn btn-sm btn-primary btn-block" role="button">Delete</a></td>
                            </tr>                               <tr>
                                <td>Product 3</td>
                                <td>16.99</td>
                                <td>14</td>
                                <td><a href="create-function" className="btn btn-sm btn-primary btn-block" role="button">Update</a></td>
                                <td><a href="create-function" className="btn btn-sm btn-primary btn-block" role="button">Delete</a></td>
                            </tr>   
                        </tbody>
                    </table>
                </div>
                </div>
                </div>
            </div>
            </div>
        </div>
    </form>
    
    
    {/*<div>    
                        <div className="container">
                            <div className="row">
                                <div className="col-xs-6">
                                    <div className="m" max-width="400"><img src={this.state.productInfo.productImageURL} /></div>
                                </div>
                                <div className="col-xs-6">
                                    <div className="m" max-width="400">{this.state.productInfo.productDescription}</div>
                                </div>                                
                                <div className="col-xs-6">
                                    <h1>{this.state.productInfo.title}</h1>
                                        <p>{this.state.productInfo.price}</p>
                                        <p><a href="#" className="btn btn-success btn-lg"><span className="glyphicon glyphicon-edit"></span><i className="fas fa-shopping-cart"></i> Add to Cart</a></p>
                                    <h3>{this.state.productInfo.productHeading1}</h3>
                                        <ul>
                                            <li>{this.state.productInfo.productli1}</li>
                                            <li>{this.state.productInfo.productli2}</li>
                                            <li>{this.state.productInfo.productli3}</li>
                                        </ul>    
                                </div>
                                    <div className="row">
                                        <div className="col-xs-8">
                                            <h2>{this.state.productInfo.productHeading2}</h2>
                                            <p>{this.state.productInfo.productDescription2}</p>
                                            <h2>{this.state.productInfo.productHeading3}</h2>
                                            <p>{this.state.productInfo.productDescription3}</p>
                                        </div>
                                    </div>
                                </div>                                
                            </div>
                        </div>*/}
</div>

            );
    }
    
}