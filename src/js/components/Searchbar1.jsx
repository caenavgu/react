import React from 'react';
import { Link } from 'react-router-dom'

export class Searchbar1 extends React.Component{

    
constructor () {
    super ()
}
    
    render(){
        return(
            
                  <div className="container">
                    <div className="row">
                        <div className="col-2 text-center">
                            <Link to="/"><img src="src/img/primary/devshui-logo.jpg" alt="DevShui Logo!"/></Link>
                        </div>
                        <div className="col-5 mx-auto">
                            <div className="input-group">
                                <div className="input-group-btn search-panel">
                                    <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown">
                                        <span id="search_concept">All <span className="glyphicon glyphicon-triangle-bottom" /></span><span className="caret"></span>
                                    </button>
                                    <ul className="dropdown-menu" role="menu">
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
                        <div className="col-2 text-center">
                            <Link to="/Login"><p>Login</p></Link>
                        </div>
                        <div className="col-2 text-center">
                            <Link to="/NewUser"><p>New? Register Here</p></Link>
                        </div>
    </div>
</div>
            );  
    }
    
}