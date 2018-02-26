import React from 'react';
import { NavLink } from 'react-router-dom';

export class Navbar extends React.Component {
  
  constructor(){
    
    super();
    
    this.theMenu = [
        this.addItem('Home','/'),
        this.addItem('Settings','/', [
            this.addLink('Profile','/profile'),
            this.addLink('Log Out','/logout')
        ]),
        this.addItem('Home','/')
      ];
      
    console.log(this.theMenu);
    
  }
  
  addItem(itemName, itemURL, itemLinks=null){
    
    return {
      label: itemName, 
      url: itemURL,
      links: itemLinks
    }
  }
  
  addLink(linkName, linkURL){
    
    return {
      label: linkName,
      url: linkURL
    }
  }
    
  render(){

    return(
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <NavLink to="/" className="navbar-brand">JobCore</NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            { this.renderNavItem(this.theMenu[1]) }
          </ul>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Profile
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">User</a>
                <a className="dropdown-item" href="/shifts">Company</a>
                <a className="dropdown-item" href="/shifts">Log Out</a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
  
  renderNavItem(navItemData)
  {
    
    
    var links = navItemData.links.map(function(link){
      return <a key={link.url} className="dropdown-item" href={link.url}>{link.label}</a>;
    });
    
    return (<li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {navItemData.label}
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                {links}
              </div>
            </li>);
  }
};