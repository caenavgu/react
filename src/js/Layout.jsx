/*
*   Modules dependencies
*/
import React from 'react';
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import {Home} from './views/Home';
import {Profile} from './views/Profile';
import {NewUser} from './views/Newuser';
import {Login} from './views/Login';
import {PasswordReminder} from './views/PasswordReminder';
import {Cart} from './views/Cart';
import {About} from './views/About.jsx';
import {BecomeASeller} from './views/BecomeASeller.jsx';
import {ContactUs} from './views/ContactUs.jsx';
import {AdminProductView} from './views/AdminProductView.jsx';
<<<<<<< HEAD
import {SearchResultsPage} from './components/SearchResultsPage.jsx';
import {ProductPage} from './views/ProductPage';
=======
import {SearchResultsPage} from './views/SearchResultsPage.jsx';

import {SearchResults} from './components/SearchResults';
import {ProductMain} from './components/ProductMain';
>>>>>>> 7f4a8d16f65a9eef4ea9ff1e727d80fd3bf84da6
import {Searchbar1} from './components/Searchbar1.jsx';
import {CartStatus} from './components/CartStatus.jsx';
import {NavbarLinks} from './components/NavbarLinks.jsx';
import * as mainActions from './actions/mainActions.js';
/*  EXPORT  */
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
                                <Route exact path='/PasswordReminder' component={PasswordReminder} />
                                <Route exact path='/Newuser' component={NewUser} />
                                <Route exact path='/ProductPage/:id' component={ProductPage} />
                                <Route exact path='/Cart' component={Cart} />
                                <Route exact path='/SearchResultsPage' component={SearchResultsPage} />
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