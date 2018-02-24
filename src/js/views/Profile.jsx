import React from 'react';
import {Searchbar} from '../components/Searchbar.jsx';
import {Navbar} from '../components/Navbar.jsx';

export class Profile extends React.Component{
    
    constructor() {
        super();
        
    }
    
    render(){
        
        return(
                    
                    <div>
                    
                     {(this.props.loggingIn == true) ?
                                                    <div className="container">
                                    <div className="col-4 mx-auto">
                                        <img src="src/img/profile/profile-view.png" alt="Generic placeholder image" width="200" />
                                            <h4><b>Colby Taylor</b></h4> 
                                            <p>Member since 2018</p> 
                                        <p>What would you like to do?</p>
                                        <ul>
                                            <li>View Recent Orders</li>
                                            <li>View Order History</li>
                                            <li>Edit Profile</li>
                                            <li>Edit Address</li>
                                            <li>Edit Interests</li>
                                        </ul>
                                    </div>    
                            </div>  
                                    : <div className="alert alert-danger col-6 mx-auto"><p>You are not currently logged in :( Please login or register.</p></div>
                                    }             
  
                        </div>
            );
    }
    
}