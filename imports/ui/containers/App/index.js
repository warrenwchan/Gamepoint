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
import AccountsUIWrapper from '../../components/AccountsUIWrapper';

class App extends Component {

  render() {
    return (
      <Router>
<<<<<<< HEAD
        <Home>
          <Switch>
            {/*<Route exact path="/login" component={Login} />*/}
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/quickgame" component={QuickGame} />
          </Switch>
        </Home>
=======
        <div>
        <AccountsUIWrapper/>
        {this.props.currentUser ? (
          <Home>
            <Switch>
              {/*<Route exact path="/" component={Home} />*/}
              {/*<Route exact path="/login" component={Login} />*/}
              <Route exact path="/profile" component={Profile} />
              <Route exact path="/quickgame" component={QuickGame} />
            </Switch>
          </Home>
        ): (
            <div className="logged-out-message">
              <p>Please sign in to see your ULTIMATE PING PONG APP.</p>
            </div>
        )}
        </div>

>>>>>>> 4bc2aceaeb05443a50fbd02ddfe888e2475d24d6
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
