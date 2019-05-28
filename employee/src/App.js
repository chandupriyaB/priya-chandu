import React, { Component } from 'react';
import { Router, Route } from 'react-router'
import HomePage from "./layout/HomePage";
import history from './utils/Hisory';
import LoginPage from './layout/LoginPage';

class App extends Component {
  render() {
    return (
       <div className="App">
         <Router history={history}>
          <Route exact path="/" component={LoginPage} />
          <Route  exact path="/home" component={HomePage} />
         </Router>
       </div>
    );
  }
}

export default App;
