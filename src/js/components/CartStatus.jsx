import React from 'react';

export class CartStatus extends React.Component{
    
    
    render(){
        
        return(
                  <div className="p-2">
                    <li><i className="fas fa-shopping-cart"></i>(0)</li>
                </div>
            );
    }
}