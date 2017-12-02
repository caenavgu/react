import React from 'react';

import {Navbar} from './Navbar.jsx';
import {Searchbar} from './Searchbar';
import {Carousel} from './Carousel';
import {Showcase} from './Showcase';
import {Productscard} from './Productscard';


export class Layout extends React.Component{
    
    render(){
        return(
            <div>
                <Searchbar />
                <Navbar />
                <Carousel />
                <Showcase >
                </Showcase>
            </div>
            );
    }
    
}