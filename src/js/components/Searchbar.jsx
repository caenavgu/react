import React from 'react';

export class Searchbar extends React.Component{
    
    render(){
        return(
            <nav className="navbar bg-light ">
                <div className="media">
                    <img className="m" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Yin_yang.svg/1200px-Yin_yang.svg.png" alt="Generic placeholder image" height="42" width="42" />
                </div>
                  <div className="col-lg-6">
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Product name" aria-label="Product name"/>
                        <span className="input-group-btn">
                            <button className="btn btn-secondary" type="button"> <i class="fa fa-search" aria-hidden="true"></i> </button>
                        </span>
                    </div>
                  </div>
                <button className="btn btn-outline-info" id='c' type="submit">LOGIN</button>
            </nav>
            );  
    }
    
}