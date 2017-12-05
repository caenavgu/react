import React from 'react';

export class Searchbar extends React.Component{
    
    render(){
        
        return(
               <nav className="navbar bg-light ">
  <div className="media">
    <img className="m" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Yin_yang.svg/1200px-Yin_yang.svg.png" alt="Generic placeholder image" height="42" width="42" />
  </div>
  <input className="form-control col-5" type="search" placeholder="Search" aria-label="Search" />
  <button className="btn btn-success" type="submit"><i className="fa fa-search" aria-hidden="true"></i></button>
  <button className="btn btn-success" id='c' type="submit">LOGIN</button>
  </nav>
            );  
    }
    
}