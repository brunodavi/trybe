import './App.css';
import Home from './Home';
import About from './About';
import Help from './Help';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'  

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">
          <div>Home</div>
        </Link>
        <Link to="/help">
          <div>Help</div>
        </Link>
        <Link to="/about">
          <div>About</div>
        </Link>
      </nav>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/about" component={ About } />
        <Route exact path="/help" >
          <Help info="Geral" />
        </Route>
        <Route path="/help/:id" render={((props) => ( <Help {...props} /> ))} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
