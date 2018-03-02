/*
*   Modules dependencies
*/
import React from 'react';
import { Link } from 'react-router-dom';
/*  EXPORT*/
export class Searchbar1 extends React.Component{
    
constructor () {
    super ()
    ;
}
    
    render(){
        return(
            <div>
                    <nav className="row navbar navbar-dark bg-dark">
                        <div className="col-xs-4 mx-auto p-2">
                            <Link to="/"><img src="src/img/primary/devshui-logo.png" alt="DevShui Logo!"/></Link>
                        </div>
                        <div className="col-xs-6 mx-auto p-2">
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
                                    <button className="btn btn-default" type="button"><i className="fa fa-search" aria-hidden="true"></i></button>
                                </span>
                            </div>
                        </div>
                        <div className="col-xs-2 mx-auto">
                            <div className="col-xs-6 text-center text-white align-middle">
                                <Link to="/Login"><p className="text-white">Login</p></Link>
                            </div>
                            <div className="col-xs-6 text-center">
                                <Link to="/NewUser"><p className="text-white">New? Register Here</p></Link>
                            </div>
                        </div>
                </nav> 
            </div>
            );  
    }
    
}