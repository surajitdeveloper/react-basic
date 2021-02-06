import facile from './facile.png';
import './App.css';
import Login from './Login';
import Profile from './Profile';
import { HashRouter as Router, 
  // Switch,
  Route,
  // Link,
  Redirect } from "react-router-dom"; //, Link , BrowserRouter as Router,
function App() {
  return (
    <Router>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossOrigin="anonymous"></link>
      <div className="App">
      <header className="App-header">
        <img src={facile} className="App-logo" alt="facile" />
        <Route exact path="/"><Redirect to="/login" /></Route>
        <Route path="/login" exact component={Login} />
        <Route path="/profile" exact component={Profile} />
      </header>
    </div>
    </Router>
  );
}

export default App;
