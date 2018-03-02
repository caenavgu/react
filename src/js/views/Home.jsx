/*
*   Modules dependencies
*/
import React from 'react';
import {Carousel} from '../components/Carousel.jsx';
import {Productscard} from '../components/Productscard.jsx';
import {Promotion} from '../components/Promotion.jsx';
import {CategoryArea} from '../components/CategoryArea.jsx';
import {HorizontalCard} from '../components/HorizontalCard.jsx';
import mainStore from '../stores/mainStore.js';
/*  EXPORT  */
export class Home extends React.Component{
    
    constructor(props) {
        super(props);
        this.state = {
            products: mainStore.getProducts()
        };
    }
    
    componentWillMount(){
        mainStore.on('change', ()=>{
            this.setState({
                products: mainStore.getProducts()
            });
        });
    }

    render(){
        return(
            <div>
                <Carousel />
                <Productscard data={this.state.products} />    
                <Promotion/>
                <CategoryArea  data={this.state.products}/>
                <HorizontalCard/>
            </div>
            );
    }
    
}