import React from 'react';
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

export default class App extends React.Component {

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" component={Home}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/profile" component={Profile}/>
          <Route path="/quickgame" component={QuickGame}/>
        </Switch>
      </Router>
    );
  }
}
