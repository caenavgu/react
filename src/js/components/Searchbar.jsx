import React from 'react';
import { Link } from 'react-router-dom'

export class Searchbar extends React.Component{

    
constructor () {
    super ()
}
    
    render(){
        return(
            
            <div>
                <nav className="navbar bg-light container-fluid">
                    <div className="row">
                        <div className="col-2 col-offset-2 text-center">
                            <Link to="/"><img src="src/img/primary/devshui-logo.jpg" alt="DevShui Logo!"/></Link>
                        </div>
                    </div>
                        <div className="col-6 col-offset-2 text-center">
                            <form className="form-inline justify-content-center">
                                <div className="form-group mx-sm-12">
                                    <label className="sr-only">Password</label>
                                    <input type="search" className="form-control" id="inputPassword2" placeholder="Find something awesome here!" />
                                </div>
                                <button type="submit" className="btn btn-primary"><Link to="/searchresults"><i className="fa fa-search" aria-hidden="true"></i></Link></button>
                            </form>s    
                        </div>
                    <div>
                        <button className="btn btn-outline-info pull-right m-0" id='c' type="submit"><Link to="/Profile">LOGIN</Link></button><br />
                        <Link className="btn pull-right" to="/newuser">New? Start here.</Link>
                    </div>
                </nav>
            </div>
            );  
    }
    
}