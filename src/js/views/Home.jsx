import React from 'react';
import {Searchbar} from '../components/Searchbar.jsx';
import {Navbar} from '../components/Navbar.jsx';
import {Carousel} from '../components/Carousel.jsx';
import {Productscard} from '../components/Productscard.jsx';
import {Promotion} from '../components/Promotion.jsx';
import {CategoryArea} from '../components/CategoryArea.jsx';
import {HorizontalCard} from '../components/HorizontalCard.jsx';
{/*import {Profile} from './components/Profile';*/}

export class Home extends React.Component{
    
    render(){
        
        return(
            <div>
                <Carousel />
                <Productscard data={this.props.products} />    
                <Promotion/>
                <CategoryArea/>
                <HorizontalCard/>
            </div>
            );
    }
    
}