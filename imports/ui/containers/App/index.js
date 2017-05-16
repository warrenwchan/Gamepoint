import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom'

// route components
import Login from './../Login';
import Home from './../Home';
import Profile from './../Profile';
import QuickGame from './../QuickGame';

class App extends Component {
  render() {
    return (
      <Router>
        <Home>
          <Switch>
            {/*<Route exact path="/login" component={Login} />*/}
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/quickgame" component={QuickGame} />
          </Switch>
        </Home>
      </Router>
    );
  }
};

export default App;
