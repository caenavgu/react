import React from 'react';
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import {Home} from './views/Home';
import {Profile} from './views/Profile1';
import {NewUser} from './views/newuser';
import {Login} from './views/Login';
import {ProductMain} from './components/ProductMain';
import {Cart} from './views/Cart';
import {searchresults} from './views/searchresults';
import {Searchbar1} from './components/Searchbar1.jsx';
import {Navbar} from './components/Navbar.jsx';
import {About} from './views/About.jsx';
import {BecomeASeller} from './views/BecomeASeller.jsx';
import {ContactUs} from './views/ContactUs.jsx';
import * as mainActions from './actions/mainActions.js';
import * as mainStore from './stores/mainStore.js';
import DevShuiAPIWapper from './utils/DevShuiAPIWapper.js';

export class Layout extends React.Component{
    
    componentWillMount(){
        mainActions.getProductsAction();
        mainStore.on('change', function(){
            this.setState({
                products: mainStore.getProducts()
              });
        });
    }
    
    render(){
        
        return(
            <div>
                <BrowserRouter> 
                    <div>
                        <Searchbar1 />
                        <Navbar />
                            <Switch>
                                <Route exact path='/index.html' component={Home} />
                                <Route exact path='/' component={Home} />                        
                                <Route exact path='/profile' component={Profile} />
                                <Route exact path='/Login' component={Login} />
                                <Route exact path='/newuser' component={NewUser} />
                                <Route exact path='/ProductMain' component={ProductMain} />
                                <Route exact path='/Cart' component={Cart} />
                                <Route exact path='/searchresults' component={searchresults} />
                                <Route exact path='/About' component={About} />
                                <Route exact path='/BecomeASeller' component={BecomeASeller} />
                                <Route exact path='/ContactUs' component={ContactUs} />
                            </Switch>
                        </div>    
                    </BrowserRouter> 
            </div>
            );
    }
    
}