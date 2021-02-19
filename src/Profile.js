
import React from 'react';

class Profile extends React.Component {
  logout()
  {
    localStorage.token = "";
    window.location.href="/#/login"; return false;
  }
  render() {
    if(!localStorage.token) {window.location.href="/#/login"; return false;}
    return (
      <div className="App">
      <p>
      Welcome <b>Saswati Mohanty</b>
      </p>
      <button className="btn btn-lg btn-primary btn-block" onClick={this.logout}>Logout</button>
    </div>
    );
  }
}

export default Profile;
