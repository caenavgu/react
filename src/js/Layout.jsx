import React from 'react';
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import {Home} from './Home';
import {Profile} from './Profile1';
import {NewUser} from './newuser';
import {Product} from './Product';
import {searchresults} from './searchresults';
import {Searchbar} from './components/Searchbar.jsx';
import {Navbar} from './components/Navbar.jsx';

export class Layout extends React.Component{
    
    render(){
        
        return(
            <div>
                <BrowserRouter> 
                    <div>
                        <Searchbar />
                        <Navbar />
                            <Switch>
                                <Route exact path='/index.html' component={Home} />
                                <Route exact path='/' component={Home} />                        
                                <Route exact path='/profile' component={Profile} />
                                <Route exact path='/newuser' component={NewUser} />
                                <Route exact path='/Product' component={Product} />
                                <Route exact path='/searchresults' component={searchresults} />
                            </Switch>
                        </div>    
                    </BrowserRouter> 
            </div>
            );
    }
    
}