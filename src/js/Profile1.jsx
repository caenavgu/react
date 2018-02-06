import React from 'react';
import {Searchbar} from './components/Searchbar.jsx';
import {Navbar} from './components/Navbar.jsx';

export class Profile extends React.Component{
    
constructor () {
    super ()
}
    
    render(){
        
        return(
                    <div>    
                        <Searchbar />
                        <Navbar />
                            <div class="container col-lg-3">
                                <div class="card">
                                    <img className="m" src="src/img/profile/profile-view.png" alt="Generic placeholder image" width="200" />
                                        <div >
                                            <h4><b>Colby Taylor</b></h4> 
                                            <p>Member since 2018</p> 
                                        </div>
                                </div>
                            <div>
                        <h1>FirstName's Profile</h1>
                        <h2>Welcome, First Name</h2>
                        <img className="card-img-top" src="/src/img/profile/profile-view.png" alt="Card image cap" width="500px"/>
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
                </div>
            );
    }
    
}