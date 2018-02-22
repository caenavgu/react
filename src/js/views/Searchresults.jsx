import React from 'react';
import { Link } from 'react-router-dom'

export class searchresults extends React.Component{
    
constructor () {
    super ()
}
    
    render(){
        
        return(
                    <div>    
                        <div className="container 0">
                            <div className="row 20">
                                
                                <div>
                                    <img className="m" src="/src/img/homeProducts/product-shirt-bsod.png" alt="Generic placeholder image" width="150" />
                                </div>
                                <div className="row">
                                    <div>
                                        <h1>BSOD Blue Shirt Search Result</h1>
                                        <p>$20.00</p>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="alert alert-warning" role="alert">
                                        <a href="#" class="alert-link">Learn More</a>
                                    </div>
                                </div>
                                </div>
                        </div>
                       
            </div>
            );
    }
    
}