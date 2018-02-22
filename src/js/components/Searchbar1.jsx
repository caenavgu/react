import React from 'react';
import { Link } from 'react-router-dom'

export class Searchbar1 extends React.Component{

    
constructor () {
    super ()
}
    
    render(){
        return(
            <div>
                    <nav class="navbar navbar-dark bg-dark">
                        <div className="col-2 text-center">
                            <Link to="/"><img src="src/img/primary/devshui-logo.jpg" alt="DevShui Logo!"/></Link>
                        </div>
                        <div className="col-5 mx-auto">
                            <div className="input-group">
                                <div className="input-group-btn search-panel">
                                    <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown">
                                        <span id="search_concept">All <span className="glyphicon glyphicon-triangle-bottom" /></span><span className="caret"></span>
                                    </button>
                                    <ul className="dropdown-menu " role="menu">
                                      <li><a href="/Shirts">Shirts</a></li>
                                      <li><a href="/BumperStickers">Bumper Stickers</a></li>
                                      <li><a href="/CoffeeMugs">Coffee Mugs</a></li>
                                    </ul>
                                </div>
                                <input type="hidden" name="search_param" value="all" id="search_param"></input>         
                                <input type="text" className="form-control" name="x" placeholder="Search term..."></input>
                                <span className="input-group-btn">
                                    <button className="btn btn-default" type="button"><span className="glyphicon glyphicon-search"></span></button>
                                </span>
                            </div>
                        </div>
                        <div className="col-2 text-center text-white align-middle">
                            <Link to="/Login"><p className="text-white">Login</p></Link>
                        </div>
                        <div className="col-2 text-center">
                            <Link to="/NewUser"><p className="text-white">New? Register Here</p></Link>
                    </div>
                </nav> 
                
            {/*<div className="container">    
                <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <a className="navbar-brand" href="#">Hidden brand</a>
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                        <a className="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="#">Disabled</a>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                  </div>
                </nav>
            </div>*/}
            </div>
            );  
    }
    
}