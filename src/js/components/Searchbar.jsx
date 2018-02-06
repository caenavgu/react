import React from 'react';
import { Link } from 'react-router-dom'

export class Searchbar extends React.Component{
    
    render(){
        return(
            
            <div>
            {/*<nav className="navbar bg-light container"></nav>*/}

            <div className="row">
                <div className="col-12 col-offset-2 text-center">
                    <a href="/"><img src="src/img/primary/devshui-logo.jpg" alt="Generic placeholder image"/></a>
                </div>
            </div>
            {/*<div class="container">
            <div class="span12">           
                    <input type="text" className="form-control8" placeholder="Find something awesome here!" aria-label="Product name"/>
                    <button className="btn btn-success col-2" type="button"><i className="fa fa-search" aria-hidden="true"></i></button>
            </div>
            </div>*/}

            <form className="form-inline justify-content-center">
  {/*<div class="form-group mb-2">
    <label for="staticEmail2" class="sr-only">Email</label>
    <input type="text" readonly class="form-control-plaintext" id="staticEmail2" value="email@example.com" />
  </div>*/}
  <div className="form-group mx-sm-10 mb-4">
    <label for="inputPassword2" className="sr-only">Password</label>
    <input type="password" className="form-control" id="inputPassword2" placeholder="Find something awesome here!" />
  </div>
  <button type="submit" className="btn btn-primary mb-4"><i className="fa fa-search" aria-hidden="true"></i></button>
</form>

            
            
            {/*
                <div class="container">
                <div class="span12">
                                <i class="fas fa-shopping-cart"></i>
                      </div>
                      </div>

            */}      

             
                      <div>
        
                        <button className="btn btn-outline-info pull-right" id='c' type="submit"><a href="/Profile">LOGIN</a></button><br />
                        <Link class="btn pull-right" to="/newuser">New? Start here.</Link>
                  </div>
              
                          
            </div>
            );  
    }
    
}