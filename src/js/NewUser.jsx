import React from 'react';
import {Navbar} from './components/Navbar.jsx';

export class NewUser extends React.Component{
    
constructor () {
    super ()
}
    
    render(){
        
        return(
                <div>
                    <Navbar />
                    <div class="container col-lg-3">
                        <h1>What's your name?</h1>
                        <h2>Enter Email Here</h2>
                    </div>   
                </div>    
            );
    }
    
}