import React from 'react';
import * as mainActions from './actions/mainActions.js'
import MainStore from  './stores/mainStore.js'
import { Link } from 'react-router-dom'

export class Login extends React.Component{
    
    constructor() {
        super();
        
        this.state = {
            username: '',
            password: '',
            loggingIn: null
        }
    }
    
    /*
    * This function will be called by the system when the component is 
    * about to render for the first time.
    */
    componentWillMount(){
      
      //Here we want to start listening to when the store emits changes
      MainStore.on('change', this.handleStoreEmitsChanges.bind(this));
    }
    
    
    /*
    * This is the listener for when the store emitis changes
    */
    handleStoreEmitsChanges(){
      //here is where you reset the state with the fresh recently update store
      
      var sessionInfo = MainStore.getSessionInfo();
      if(sessionInfo == true){
        this.props.history.push('/profile');
      }
      else
      {
        this.setState({ loggingIn: sessionInfo });
      }
    }
    
    render(){

        return (
       <div>
                <div/>
                    <div id="regContainer" className="container">
                          <div className="row">
                          <div className="col-md-6 col-md-offset-6 mx-auto">
                            <div className="panel panel-login">
                              <div className="panel-heading">
                                <div className="row">
                                  <div className="col-12">
                                    <a href="#" className="active" id="login-form-link">Login</a>
                                  </div>
                                </div>
                                <hr />
                              </div>
                              <div className="panel-body">
                                <div className="row">
                                  <div className="col-lg-12">
                                    {(this.state.loggingIn == false) ?
                                    <div className="alert alert-danger">Error asshole!</div>
                                    : ''}
                                    <form ng-submit="sendPost()" id="login-form" method="post" role="form" style={{display: 'block'}}>
                                      <div className="form-group col-10 mx-auto">
                                        <label htmlFor="username">Username / Email</label>
                                        <input ng-model="newName" type="text" name="username" id="username" tabIndex="1" className="form-control" onChange={(evt)=>this.setState({username: evt.target.value })} placeholder="Username" value={this.state.username} />
                                      </div>
                                      <div className="form-group col-10 mx-auto">
                                        <label htmlFor="password1">Password</label>
                                        <input type="password" name="password" id="password" tabIndex="2" className="form-control" onChange={(evt)=>this.setState({password: evt.target.value })} placeholder="Password" value={this.state.password} />
                                      </div>
                                      <div className="form-group text-center">
                                        <input type="checkbox" tabIndex="3" className="" name="remember" id="remember" />
                                        <label htmlFor="remember"> Remember Me</label>

                                        <div className="form-group">
                                        <div className="row">
                                          <div className="col-10 mx-auto">
                                            <input type="button" name="login-submit" id="login-submit" onClick={() => mainActions.login(this.state.username, this.state.password) } tabIndex="4" className="btn btn-primary btn-block" value="Log In" />
                                          </div>
                                        </div>
                                      </div>
                                      
                                        <div className="form-group">
                                        <div className="row">
                                          <div className="col-10 mx-auto">
                                            <Link to="/"><p>New? Register Here</p></Link>
                                          </div>
                                        </div>
                                      </div>                                      
                                        
                                      </div>
                                      
                                      
                                      
                                    </form>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                </div>
        </div>
           
        );
        
    }
    
}