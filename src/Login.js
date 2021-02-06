import React from 'react';
// import { useHistory, browserHistory,
//   Redirect } from "react-router-dom";
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleClick = this.handleClick.bind(this)
  }
  updateInputValue(type,evt) {
    switch(type)
    {
      case 'username':
        this.setState({
          username: evt.target.value
        });
        break;
      case 'password':
        this.setState({
          password: evt.target.value
        });
        break;
      default:
        break;
    }
  }
handleClick = () =>
{
  const username = "saswati";
  const password = "1234";
  if(this.state.username == username && this.state.password == password)
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
        <input type="text" value={this.state.username} onChange={evt => this.updateInputValue("username", evt)} className="form-control" name="username" placeholder="Username" required="" />
        <input type="password" value={this.state.password} onChange={evt => this.updateInputValue("password", evt)} className="form-control" name="password" placeholder="Password" required="" />      
        <button onClick={ this.handleClick } className="btn btn-lg btn-primary btn-block" type="submit">Login</button>
        </div>
      </div>
    </div>
    );
  }
}

export default Login;
