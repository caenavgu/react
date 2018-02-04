import React from 'react';

export class Searchbar extends React.Component{
    
    render(){
        return(
            <div>
            
            <nav className="navbar bg-light col-lg-12 row mt-3">
            
                <div className="col-lg-2">
                    <a href="/"><img className="m" src="src/img/primary/devshui-logo.jpg" alt="Generic placeholder image" width="200"/></a>
                </div>
                
                  <div className="col-lg-6">
                    <input type="text" className="form-control" placeholder="Find something awesome here!" aria-label="Product name"/>
                  </div>

                  <div className="col-lg-1">
                            <button className="btn btn-success" type="button"><i className="fa fa-search" aria-hidden="true"></i></button>
                  </div>

                  <div className="col-lg-1">
                            <i class="fas fa-shopping-cart"></i>
                  </div>

                  <div className="col-lg-2">
        
                        <button className="btn btn-outline-info pull-right" id='c' type="submit"><a href="/Profile">LOGIN</a></button><br />
                        <a class="btn pull-right" href="/NewUser">New? Start here.</a>
                  </div>
                          
            </nav>
            </div>
            );  
    }
    
}