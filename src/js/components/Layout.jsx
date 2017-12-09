import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import {Searchbar} from './Searchbar.jsx';
import {Navbar} from './Navbar.jsx';
import {Carousel} from './Carousel.jsx';
import {Showcase} from './Showcase.jsx';
import {Promotion} from './Promotion.jsx';
import {CategoryArea} from './CategoryArea.jsx';
import {HorizontalCard} from './HorizontalCard';


export class Layout extends React.Component{
    
    render(){
        
        return(
            <div>
                <BrowserRouter> 
                    <div>
                        <Searchbar />
                            <Switch>
                                <Route render={() => <p className="text-center mt-5">Centered Text</p>} />
                            </Switch>
                        <Navbar />
                        <Carousel />
                        <Showcase />
                        <Promotion/>
                        <CategoryArea/>
                        <HorizontalCard/>
                    </div>
                </BrowserRouter> 
            </div>
            );
    }
    
}