import React from 'react';
import {Productscard} from './Productscard';

export class Showcase extends React.Component{
    
    render(){
        return(
            <div >
                <Productscard/>
                <Productscard/>
                <Productscard/>
                <Productscard/>
                <Productscard/>
            </div>
            );
    }
    
}