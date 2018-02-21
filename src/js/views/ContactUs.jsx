import React from 'react';
import { Link } from 'react-router-dom'

export class ContactUs extends React.Component{
    
    render(){
        return(
                <div className="col-6 mx-auto">
                    <h1>Have a question we haven't answered yet?</h1>
                    <p>Email us at <Link to="mailto:">contact@devshui.com</Link></p>
                </div>
                
            );  
    }
}


