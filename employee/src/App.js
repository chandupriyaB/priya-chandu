import React, { Component } from 'react';
import './App.css';
import { Router, Route } from 'react-router'
import HomePage from "./layout/HomePage";
import LoginPage from "./layout/LoginPage"
import BrowserHistory from './utils/BrowserHistory';
class App extends Component {
  render() {
    return (
      <div className="app" >
         <Router browserHistory={BrowserHistory}>
        <Route exact path="/" component={LoginPage} />
        <Route path="/homePage" component={HomePage} />
    </Router>
      </div>
    );
  }
}

export default App;
