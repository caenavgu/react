import React from 'react';

export class Navbar extends React.Component{
    
    render(){
        return(
            <div className='header'>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                  <a className="navbar-brand" href="#">Navbar</a>
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                      <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="/categories" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          Categories
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/bestsellers">Best Sellers</a>
                      </li><li className="nav-item">
                        <a className="nav-link" href="/bestsellers">Shopping Cart <i class="fa fa-shopping-cart" aria-hidden="true"></i></a>
                      </li>
                    </ul>
                  </div>
                </nav>
            </div>
            
            );
    }
    
}