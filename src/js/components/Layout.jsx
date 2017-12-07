import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import {Searchbar} from './Searchbar.jsx';
import {Navbar} from './Navbar.jsx';
import {Carousel} from './Carousel.jsx';
import {Showcase} from './Showcase.jsx';
// import {Carousel} from './Carousel';
// import {Showcase} from './Showcase';
// import {Productscard} from './Productscard';


export class Layout extends React.Component{
    
    render(){
        
        return(
            <div>
                <BrowserRouter> 
                    <div>
                        <Searchbar />
                            <Switch>
                                <Route exact path='/' component={Navbar} />
                                <Route exact path='/' component={Carousel} />
                                <Route exact path='/' component={Layout} />
                                <Route render={() => <p className="text-center mt-5">Not found</p>} />
                            </Switch>
                    </div>
                </BrowserRouter> 
            </div>
            );
    }
    
}