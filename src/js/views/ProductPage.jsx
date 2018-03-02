/*
*   Modules dependencies
*/
import React from 'react';
import mainStore from '../stores/mainStore.js';
import {ProductMain} from '../components/ProductMain';
import {Profile} from './Profile';
/*  EXPORT  */
export class ProductPage extends React.Component{
    
        constructor(props) {
        super(props);
        this.state = {
            productInformation: mainStore.getSingleProduct(this.props.match.params.id)
        };
    }
    
    componentWillMount(){
        mainStore.on('change', ()=>{
            this.setState({
                productInformation: mainStore.getSingleProduct(this.props.match.params.id)
            });
        });
    }

    render(){
        return(
            <div>
                <ProductMain data={this.state.productInformation}/>    
            </div>
            );
    }
    
}