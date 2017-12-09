import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import {Searchbar} from './Searchbar.jsx';
import {Navbar} from './Navbar.jsx';
import {Carousel} from './Carousel.jsx';
import {Showcase} from './Showcase.jsx';
import {Promotion} from './Promotion.jsx';
import {CategoryArea} from './CategoryArea.jsx';
// import {Productscard} from './Productscard';


export class Layout extends React.Component{
    
    render(){
        
        return(
            <div>
                <BrowserRouter> 
                    <div>
                        <Searchbar />
                        <Navbar />
                        <Carousel />
                        <Showcase />
                        <Promotion/>
                        <CategoryArea/>
                    </div>
                </BrowserRouter> 
            </div>
            );
    }
    
}