import React from 'react';
import { Link } from 'react-router-dom'

export class Searchbar extends React.Component{

    
constructor () {
    super ()
}
    
    render(){
        return(
            
            <div>
                <nav className="navbar bg-light container">
                    <div className="row">
                        <div className="col-12 col-offset-2 text-center">
                            <Link to="/"><img src="src/img/primary/devshui-logo.jpg" alt="Generic placeholder image"/></Link>
                        </div>
                    </div>
                <form className="form-inline justify-content-center">
                    <div className="form-group mx-sm-8 mb-4">
                        <label for="inputPassword2" className="sr-only">Password</label>
                        <input type="search" className="form-control" id="inputPassword2" placeholder="Find something awesome here!" />
                    </div>
                    <button type="submit" className="btn btn-primary mb-4"><Link to="/searchresults"><i className="fa fa-search" aria-hidden="true"></i></Link></button>
                </form>
                    <div>
                        <button className="btn btn-outline-info pull-right" id='c' type="submit"><Link to="/Profile">LOGIN</Link></button><br />
                        <Link class="btn pull-right" to="/newuser">New? Start here.</Link>
                    </div>
                </nav>
            </div>
            );  
    }
    
}