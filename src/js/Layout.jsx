import React from 'react';
import {BrowserRouter, Route, Switch } from 'react-router-dom';

import {Home} from './views/Home';
import {Profile} from './views/Profile';
import {NewUser} from './views/Newuser';
import {Login} from './views/Login';
import {Cart} from './views/Cart';
import {About} from './views/About.jsx';
import {BecomeASeller} from './views/BecomeASeller.jsx';
import {ContactUs} from './views/ContactUs.jsx';
import {AdminProductView} from './views/AdminProductView.jsx';
import {searchresults} from './views/Searchresults';

import {ProductMain} from './components/ProductMain';
import {Searchbar1} from './components/Searchbar1.jsx';
import {CartStatus} from './components/CartStatus.jsx';
import {NavbarLinks} from './components/NavbarLinks.jsx';

import * as mainActions from './actions/mainActions.js';

export class Layout extends React.Component{
    
    componentWillMount(){
        mainActions.getProductsAction();
    }
    
    render(){
        return(
            <div>
                <BrowserRouter> 
                    <div>
                        <Searchbar1 />
                        <NavbarLinks />
                            <Switch>
                                <Route exact path='/index.html' component={Home} />
                                <Route exact path='/' component={Home} />                        
                                <Route exact path='/Profile' component={Profile} />
                                <Route exact path='/Login' component={Login} />
                                <Route exact path='/Newuser' component={NewUser} />
                                <Route exact path='/ProductMain' component={ProductMain} />
                                <Route exact path='/Cart' component={Cart} />
                                <Route exact path='/searchresults' component={searchresults} />
                                <Route exact path='/About' component={About} />
                                <Route exact path='/BecomeASeller' component={BecomeASeller} />
                                <Route exact path='/ContactUs' component={ContactUs} />
                                <Route exact path='/AdminProductView' component={AdminProductView} />
                            </Switch>
                        </div>    
                    </BrowserRouter> 
            </div>
            );
    }
    
}