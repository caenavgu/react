import React from 'react';

export class ProductMain extends React.Component{
    
  constructor() {
    super();
    
    this.state = {
        productInfo: {
            productImageURL:'/src/img/homeProducts/product-shirt-bsod.png', 
            title:'BSOD Blue Shirts (Limited Edition)', 
            price:'$20.00',
            MSRP:'24.99',
            productManufacturer:"",
            productReleaseDate:"",
            productStock:"",
            productHeading1: 'Perks',
            productli1: 'Shirt is the bluest of blues',
            productli2: 'Made of 100% Cotton',
            productli3: 'No need to iron- just wake up and look awesome',
            productDescription1: '',
            productHeading2: '',
            productDescription2: '',
            productHeading3: 'Other Uses',
            productDescription3: 'You can build a makeshift tent if you are stuck out in the wild-just get some sticks and try something with it. This shirt is Fair Trade certified and encourages local growth to the factory it was made in.',
        } 
    }
  }
    
    render(){
        
        return(
                    <div  className="col-8 mx-auto">    
                        <div class="container">
                            <div class="row">
                                <div class="col-xs-6">
                                    <div className="m" max-width="400"><img src={this.state.productInfo.productImageURL} /></div>
                                </div>
                                <div class="col-xs-6">
                                    <div className="m" max-width="400">{this.state.productInfo.productDescription}</div>
                                </div>                                
                                <div class="col-xs-6">
                                    <h1>{this.state.productInfo.title}</h1>
                                        <p>{this.state.productInfo.price}</p>
                                        <p><a href="#" class="btn btn-success btn-lg"><span class="glyphicon glyphicon-edit"></span><i class="fas fa-shopping-cart"></i> Add to Cart</a></p>
                                    <h3>{this.state.productInfo.productHeading1}</h3>
                                        <ul>
                                            <li>{this.state.productInfo.productli1}</li>
                                            <li>{this.state.productInfo.productli2}</li>
                                            <li>{this.state.productInfo.productli3}</li>
                                        </ul>    
                                </div>
                                    <div class="row">
                                        <div class="col-xs-8">
                                            <h2>{this.state.productInfo.productHeading2}</h2>
                                            <p>{this.state.productInfo.productDescription2}</p>
                                            <h2>{this.state.productInfo.productHeading3}</h2>
                                            <p>{this.state.productInfo.productDescription3}</p>
                                        </div>
                                    </div>
                                </div>                                
                            </div>
                        </div>
            );
    }
    
}