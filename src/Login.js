import React from 'react';
class Login extends React.Component {
handleClick()
{
  alert("click")
  // window.location.href="/#/profile";
}
loadLogin()
{
  alert("load");
  // if(localStorage.token) window.location.href="/#/profile";
  
}
  render() {
    return (
      <div onLoad={ this.loadLogin } className="App">
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
