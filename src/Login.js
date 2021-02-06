
function Login() {
  return (
    <div className="App">
      <div className="wrapper">
        <div className="form-signin">
        <h2 className="form-signin-heading">Please login</h2>
        <input type="text" className="form-control" name="username" placeholder="Email Address" required="" autofocus="" />
      <input type="password" className="form-control" name="password" placeholder="Password" required="" />      
      <button className="btn btn-lg btn-primary btn-block" type="submit">Login</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
