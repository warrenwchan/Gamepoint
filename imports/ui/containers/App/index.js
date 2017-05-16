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

export default class App extends Component {

  render() {
    return (
<<<<<<< HEAD
      <div>
        <DashBoard>
            <QuickGame />
        </DashBoard>
      </div>
=======
      <Router>
        <Home>
          <Switch>
            {/*<Route exact path="/" component={Home} />*/}
            <Route exact path="/login" component={Login} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/quickgame" component={QuickGame} />
          </Switch>
        </Home>
      </Router>
>>>>>>> 6f05e007168fae0381992ed44a6c3f65283dc682
    );
  }
}
