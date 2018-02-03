import React from 'react';
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import {Home} from './Home';
import {Profile} from './Profile1';

export class Layout extends React.Component{
    
    render(){
        
        return(
            <div>
                <BrowserRouter> 
                    <div>
                        <Route exact path='/' component={Home} />
                        <Route exact path='/profile' component={Profile} />
                    </div>
                </BrowserRouter> 
            </div>
            );
    }
    
}