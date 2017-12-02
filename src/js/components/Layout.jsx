import React from 'react';

import {Header} from './Header.jsx';
import {Footer} from './Footer.jsx';

export class Layout extends React.Component{
    
    render(){
        return(
            <div>
                <Header />
                <Footer />
            </div>
            );
    }
    
}