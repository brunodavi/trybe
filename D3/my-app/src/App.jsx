import './App.css';
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Logged from './pages/Logged';
import Register from './pages/Register';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <nav>
          <Link to="/login">Login</Link>
        </nav>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/login" component={ Login } />
          <Route path="/logged" component={ Logged } />
          <Route path="/register" component={ Register } />
          <Route component={ () => <h1>Not Found!</h1> } />
        </Switch>
      </BrowserRouter>
    )
  }
}

