import React from 'react';

import {Navbar} from './Header.jsx';
import {Searchbar} from './Searchbar';
import {Carousel} from './Searchbar';
import {Showcase} from './Searchbar';


export class Layout extends React.Component{
    
    render(){
        return(
            <div>
                <Searchbar />
                <Navbar />
            </div>
            );
    }
    
}