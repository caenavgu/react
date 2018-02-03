import React from 'react';

export class Profile extends React.Component{
    
    render(){
        return(
                <div>
                    <h1>FirstName's Profile</h1>
                    <h2>Welcome, First Name</h2>
                    {/*<img className="card-img-top" src="/src/img/profile/profile-view.png" alt="Card image cap" />*/}
                    <p>What would you like to do?</p>
                    <ul>
                        <li>View Recent Orders</li>
                        <li>Edit Profile</li>
                        <li>Edit Address</li>
                    </ul>
                </div>
                
            );  
    }
}

