import React from 'react';
import { Link } from 'react-router-dom'

export class BecomeASeller extends React.Component{
    
    render(){
        return(
                <div className="col-6 mx-auto">
                    <h1>Interested in Selling Your Own Swag?</h1>
                    <p>If you're ready to take your sales to the next level, then contact us at <Link to="mailto:">inquiries@devshui.com</Link></p>
                </div>
                
            );  
    }
}

