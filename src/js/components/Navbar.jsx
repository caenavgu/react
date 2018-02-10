import React from 'react';

export class Navbar extends React.Component{
    
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
        this.addItem('ShoppingCart','/shoppingcart', 7)
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
            <div className='header'>
                <nav className="navbar navbar-expand-md navbar-light bg-light">

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
              <a className="nav-link" href="#">
                {navItemData.label}
              </a>
            </li>
            );
  }
};