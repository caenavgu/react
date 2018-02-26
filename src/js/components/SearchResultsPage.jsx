import React from 'react';

import{starthubImage} from '../../../img/starthub.jpg';

export class Home extends React.Component{
    
    render(){
        return(
                <div>
                    <div>
                        <h1>Searchbar</h1>
                        <h1>Search Results:</h1>
                        <h2>Product 1 image</h2>
                        <p>Shirt 1</p>
                        <p>$15.00</p>
                    </div>
                    <div>
                        <h1>Searchbar</h1>
                        <h1>Search Results:</h1>
                        <h2>Product 2 image</h2>
                        <p>Mug 1</p>
                        <p>$10.00</p>
                    </div>
                    <div>
                        <h1>Searchbar</h1>
                        <h1>Search Results:</h1>
                        <h2>Product 3 image</h2>
                        <p>Shirt 2</p>
                        <p>$15.00</p>
                    </div>
                </div>
                
            );  
    }
    
}