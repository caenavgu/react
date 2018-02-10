import React from 'react';

export class NewUser extends React.Component{
    
constructor () {
    super ()
}

    render(){
        return (
        <div>
                <div ng-controller="myCtrl" id="fullscreen_bg" className="fullscreen_bg"/>
                    <div id="regContainer" className="container">
                          <div className="row">
                          <div className="col-md-6 col-md-offset-3">
                            <div className="panel panel-login">
                              <div className="panel-heading">
                                <div className="row">
                                  <div className="col-xs-6">
                                    <a href="#" className="active" id="login-form-link">Login</a>
                                  </div>
                                  <div className="col-xs-6">
                                    <a href="#" id="register-form-link">Register</a>
                                  </div>
                                </div>
                                <hr />
                              </div>
                              <div className="panel-body">
                                <div className="row">
                                  <div className="col-lg-12">
                                    <form ng-submit="sendPost()" id="login-form" action="#" method="post" role="form" style={{display: 'block'}}>
                                      <div className="form-group">
                                        <label htmlFor="username">Username</label>
                                        <input ng-model="newName" type="text" name="username" id="username" tabIndex="1" className="form-control" placeholder="Username" value="" />
                                      </div>
                                      <div className="form-group">
                                        <label htmlFor="password1">Password</label>
                                        <input type="password" name="password" id="password" tabIndex="2" className="form-control" placeholder="Password" />
                                      </div>
                                      <div className="form-group text-center">
                                        <input type="checkbox" tabIndex="3" className="" name="remember" id="remember" />
                                        <label htmlFor="remember"> Remember Me</label>
                                      </div>
                                      <div className="form-group">
                                        <div className="row">
                                          <div className="col-sm-6 col-sm-offset-3">
                                            <input type="submit" name="login-submit" id="login-submit" tabIndex="4" className="form-control btn btn-login" value="Log In" />
                                          </div>
                                        </div>
                                      </div>
                                    </form>
                                    <form id="register-form" action="#" method="post" role="form" style={{display: 'block'}}>
                                      <div className="form-group">
                                        <label htmlFor="username">Username</label>
                                        <input type="text" name="username" id="username" tabIndex="1" className="form-control" placeholder="Username" value="" />
                                      </div>
                                      <div className="form-group">
                                        <label htmlFor="password">Password</label>
                                        <input type="password" name="password" id="password" tabIndex="2" className="form-control" placeholder="Password" />
                                      </div>
                                      <div className="form-group">
                                        <label htmlFor="confirm-password">Confirm password</label>
                                        <input type="password" name="confirm-password" id="confirm-password" tabIndex="2" className="form-control" placeholder="Confirm Password" />
                                      </div>
                                      <div className="form-group">
                                        <div className="row">
                                          <div className="col-sm-6 col-sm-offset-3">
                                            <input type="submit" name="register-submit" id="register-submit" tabIndex="4" className="form-control btn btn-register" value="Register Now" />
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