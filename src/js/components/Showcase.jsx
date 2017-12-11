import React from 'react';
import {Productscard} from './Productscard';

export class Showcase extends React.Component{
    
    render(){
        return(
            <div class="container-fluid">
            <div >
                <Productscard/>
            </div>
            </div>
            );
    }
    
}