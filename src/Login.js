import React from 'react';
// import { useHistory, browserHistory,
//   Redirect } from "react-router-dom";
class Login extends React.Component {
handleClick()
{
  localStorage.token = "1";
  // return <Redirect to="/profile" />;
  window.location.href="/#/profile";
}

  render() {
    if(localStorage.token) {window.location.href="/#/profile"; return false;}
    return (
      <div className="App">
      <div className="wrapper">
        <div className="form-signin">
        <h2 className="form-signin-heading">Please login</h2>
        <input type="text" className="form-control" name="username" placeholder="Email Address" required="" />
      <input type="password" className="form-control" name="password" placeholder="Password" required="" />      
      <button onClick={ this.handleClick } className="btn btn-lg btn-primary btn-block" type="submit">Login</button>
        </div>
      </div>
    </div>
    );
  }
}

export default Login;
