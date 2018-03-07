import React from 'react';
import {CartStatus} from './CartStatus.jsx';

export class NavbarLinks extends React.Component{
    
constructor (props){
   
   super();

       this.theMenu = [
         this.addItem('Selling Like Hotcakes!','/bestsellers',1),
         this.addItem('Categories','/categories',2 [
           this.addLink('Shirts','/categories/shirts',3),
           this.addLink('Mugs','/categories/mugs',4),
           this.addLink('Bumper Stickers','/categories/bumperstickers', 5)
           ]),
        this.addItem('BestSellers','/bestsellers', 6),
         ];
    }
    
    addItem(itemName, itemURL, key, itemLinks =null){
      
      return {
        key: key,
        label: itemName,
        url: itemURL,
        links: itemLinks 
      }
    }
    
      addLink(linkName, linkURL, key){
        return {
          key: key,
          label: linkName,
          url: linkURL
        }
      }
      
    render() {
        return(
            <div className='container-fluid p-0'>
                                
                <nav className="navbar navbar-expand-md navbar-light bg-light mb-1">

                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto">
                      {this.renderMenu(this.theMenu)}
<<<<<<< HEAD
=======
                      <li><a href="https://react-caenavgu.c9users.io/Cart"><CartStatus /></a></li>
>>>>>>> 02c751923d7529e05482b0016598d796ebd348d1
                    </ul>
                    {/*{this.props.CartStatus}*/}
                  </div>
                    <ul className="navbar-nav mx-auto">
                      <li><a href="/Cart"><CartStatus /></a></li>
                    </ul>
                </nav>
            </div>
            );
    }
  
  
  /*Functions*/
  renderMenu(menuData){
    var items = menuData.map((item, i) =>{
          return this.renderNavItemData(item,i);
    });
    console.log("The Menu Data",items)
    return items;
  }
  
  renderNavItemData(navItemData){
    if(navItemData.links != null){ 
      return this.renderLikeADropDown(navItemData);}
      else{
        return this.renderLikeALink(navItemData);
        }
    }
  
    renderLikeADropDown(navItemData){

    var links = navItemData.links.map(function(link, index){
        return <a key={index} className="dropdown-item" href={link.url}>{link.label}</a>;
    });
    
    return (<li key={navItemData.key} className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {navItemData.label}
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                {links}
              </div>
            </li>);
  }
  
  renderLikeALink(navItemData){
    return (<li key={navItemData.key} className="nav-item">
              <a className="nav-link" href="#" >
                {navItemData.label}
              </a>
            </li>
            );
  }
};