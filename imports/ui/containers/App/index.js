import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { createContainer } from 'meteor/react-meteor-data';
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
import Preset from '../Preset';
import AccountsUIWrapper from '../../components/AccountsUIWrapper';
import ScoreBoard from '../ScoreBoard';

class App extends Component {

  render() {
    return (
      <Router>
          <Home>
            <AccountsUIWrapper />
            {this.props.currentUser ? (
              <Switch>
                {/*<Route exact path="/" component={Home} />*/}
                {/*<Route exact path="/login" component={Login} />*/}
                <Route exact path="/profile" component={Profile} />
                <Route exact path="/quickgame" component={QuickGame} />
                <Route exact path="/quickgame/preset" component={Preset} />
                <Route exact path="/quickgame/:id/scoreboard" component={ScoreBoard} />
              </Switch>
            ): (
              <div className="logged-out-message">
                <p>Please sign in to see your ULTIMATE PING PONG APP.</p>
              </div>
            )}
          </Home>
      </Router>
    );
  }
}

App.propTypes = {
  currentUser: PropTypes.object,
  currentUserId: PropTypes.string,
};

export default createContainer(() => {
  Meteor.subscribe('profiles');
  return{
    currentUser: Meteor.user(),
    currentUserId: Meteor.userId(),
  };
}, App)
