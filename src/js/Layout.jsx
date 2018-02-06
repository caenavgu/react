import React from 'react';
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import {Home} from './Home';
import {Profile} from './Profile1';
import {NewUser} from './newuser';
import {Product} from './Product';

export class Layout extends React.Component{
    
    render(){
        
        return(
            <div>
                <BrowserRouter> 
                    <div>
                        <Route exact path='/index.html' component={Home} />
                        <Route exact path='/' component={Home} />                        
                        <Route exact path='/profile' component={Profile} />
                        <Route exact path='/newuser' component={NewUser} />
                        <Route exact path='/Product' component={Product} />
                    </div>
                </BrowserRouter> 
            </div>
            );
    }
    
}