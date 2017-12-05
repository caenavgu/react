import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import {Searchbar} from './Searchbar.jsx';
import {Navbar} from './Navbar.jsx';
// import {Carousel} from './Carousel';
// import {Showcase} from './Showcase';
// import {Productscard} from './Productscard';


export class Layout extends React.Component{
    
    render(){
        
        return(
            <div>
                <BrowserRouter> 
                    <div>
                        <Navbar />
                            <Switch>
                                <Route exact path='/' component={Searchbar} />
                                <Route exact path='/' component={Navbar} />
                                <Route render={() => <p className="text-center mt-5">Not found</p>} />
                            </Switch>
                    </div>
                </BrowserRouter> 
            </div>
            );
    }
    
}