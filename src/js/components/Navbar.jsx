import React from 'react';

export class Navbar extends React.Component{
    

        
        
        
    constructor() {
      
       super();
       
       this.theMenu = [
         this.addItem('hello','/bestsellers'),
         this.addItem('Categories','/categories', [
           this.addLink('shirts','/categories/shirts'),
           this.addLink('mugs','/categories/mugs'),
           this.addLink('bumperstickers','/categories/bumperstickers')
           ]),
        this.addItem('BestSellers','/bestsellers'),
        this.addItem('ShoppingCart','/shoppingcart')
         ];
    }
    
    addItem(itemName, itemURL, itemLinks =null){
      
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
      
    render() {
        return(
            <div className='header'>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                  <a className="navbar-brand" href="#">Navbar</a>
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                      {this.renderMenu(this.theMenu)}
                    </ul>
                  </div>
                </nav>
            </div>
            );
    }
  
  
  /*Functions*/
  renderMenu(menuData){
    var items = menuData.map((item) =>{
          return this.renderNavItemData(item);
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
  
  renderLikeALink(navItemData){
    return (<li className="nav-item">
              <a className="nav-link" href="#">
                {navItemData.label}
              </a>
            </li>
            );
  }
};