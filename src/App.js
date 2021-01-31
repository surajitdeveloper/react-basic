import logo from './logo.svg';
import './App.css';
import Home from './Home';
import About from './About';
import { BrowserRouter as Router, Route } from "react-router-dom"; //, Link
function App() {
  return (
    <Router>
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Main Component
        </p>
        <Route path="/home" exact component={Home} />
        <Route path="/about" exact component={About} />
      </header>
    </div>
    </Router>
  );
}

export default App;
