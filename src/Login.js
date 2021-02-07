import React from 'react';
class Login extends React.Component {
  
  handleClick()
  {
    const username = "saswati";
    const password = "1234";
    let userLogin = document.getElementById("username").value;
    let userPassword = document.getElementById("password").value;
    if(userLogin == username && userPassword == password)
    {
      localStorage.token = "1";
      window.location.href="/#/profile";
    }
    else
    {
      alert("invalid credential");
    }
  }

  render() {
    if(localStorage.token) {window.location.href="/#/profile"; return false;}
    return (
      <div className="App">
      <div className="wrapper">
        <div className="form-signin">
        <h2 className="form-signin-heading">Please login</h2>
        <input type="text" id="username" className="form-control" name="username" placeholder="Username" required="" />
        <input type="password" id="password" className="form-control" name="password" placeholder="Password" required="" />      
        <button onClick={ this.handleClick } className="btn btn-lg btn-primary btn-block" type="submit">Login</button>
        </div>
      </div>
    </div>
    );
  }
}

export default Login;
