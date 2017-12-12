import React from 'react';
import {Productscard} from './Productscard';

export class Showcase extends React.Component{
    
    render(){
        return(
            <div className="container-fluid">
            <div >
                <Productscard/>
            </div>
            </div>
            );
    }
    
}