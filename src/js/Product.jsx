import React from 'react';
import {Searchbar} from './components/Searchbar.jsx';
import {Navbar} from './components/Navbar.jsx';

export class Product extends React.Component{
    
constructor () {
    super ()
}
    
    render(){
        
        return(
                    <div>    
                        <Searchbar />
                        <Navbar />
                        
                        <div class="container">
                            <div class="row">
                                <div class="col-xs-6">
                                    <img className="m" src="/src/img/homeProducts/product-shirt-bsod.png" alt="Generic placeholder image" max-width="400" />
                                </div>
                                <div class="col-xs-6">
                                <h1>BSOD Blue Shirt (Limited Edition)</h1>
                                <p>$20.00</p>
                            <p><a href="#" class="btn btn-success btn-lg"><span class="glyphicon glyphicon-edit"></span><i class="fas fa-shopping-cart"></i> Add to Cart</a></p>
                                <h3>Pros</h3>
                                    <ul>
                                        <li>Shirt is the bluest of blues</li>
                                        <li>Made of 100% Cotton</li>
                                        <li>You will get compliments</li>
                                        <li>No need to iron- just wake up and look awesome</li>
                                    </ul>    
                                <h3>Cons</h3>
                                    <ul>
                                        <li>Limited Edition (only 10 remain in stock)</li>
                                        <li>Your friends will be jealous at all the compliment</li>
                                        <li>Doesn't come in black</li>
                                    </ul>
                            </div>
                            <div class="row">
                                <div class="col-xs-8">
                                    <h2>Incredibly User Friendly</h2>
                                        <p>This shirt is completely amazing, it not only is a shirt, but also doubles as a synthetic gamma ray shield in case of aliens.</p>
                                    <h2>Other Uses</h2>
                                    <p>You can build a makeshift tent if you are stuck out in the wild-just get some sticks and try something with it.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
    }
    
}