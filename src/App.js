import logo from './logo.svg';
import './App.css';
import Login from './Login';
import Profile from './Profile';
import { HashRouter as Router, 
  Switch,
  Route,
  Link,
  Redirect } from "react-router-dom"; //, Link , BrowserRouter as Router,
function App() {
  return (
    <Router>
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Main Component
        </p>
        <Route exact path="/"><Redirect to="/login" /></Route>
        <Route path="/login" exact component={Login} />
        <Route path="/profile" exact component={Profile} />
      </header>
    </div>
    </Router>
  );
}

export default App;
