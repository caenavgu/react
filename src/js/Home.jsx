import React from 'react';
import {Searchbar} from './components/Searchbar.jsx';
import {Navbar} from './components/Navbar.jsx';
import {Carousel} from './components/Carousel.jsx';
import {Showcase} from './components/Showcase.jsx';
import {Promotion} from './components/Promotion.jsx';
import {CategoryArea} from './components/CategoryArea.jsx';
import {HorizontalCard} from './components/HorizontalCard.jsx';
{/*import {Profile} from './components/Profile';*/}

export class Home extends React.Component{
    
    render(){
        
        return(
            <div>
            <Searchbar />
            <Navbar />
            <Carousel />
            <Showcase />    
            <Promotion/>
            <CategoryArea/>
            <HorizontalCard/>
            </div>
            );
    }
    
}