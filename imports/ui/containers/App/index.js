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
        {/*<div>*/}
        {/*<AccountsUIWrapper/>*/}
        {/*{this.props.currentUser ? (*/}
=======
>>>>>>> e88083fcf6a9434aaa2c1cb9ce1fd8b8f9ed7b3a
          <Home>
              <AccountsUIWrapper />
        {this.props.currentUser ? (
            <Switch>
              {/*<Route exact path="/" component={Home} />*/}
              {/*<Route exact path="/login" component={Login} />*/}
              <Route exact path="/profile" component={Profile} />
              <Route exact path="/quickgame" component={QuickGame} />
            </Switch>
<<<<<<< HEAD
          </Home>
        {/*): (
=======
                    ): (
>>>>>>> e88083fcf6a9434aaa2c1cb9ce1fd8b8f9ed7b3a
            <div className="logged-out-message">
              <p>Please sign in to see your ULTIMATE PING PONG APP.</p>
            </div>
        )}
<<<<<<< HEAD
        </div>*/}

=======
          </Home>
>>>>>>> e88083fcf6a9434aaa2c1cb9ce1fd8b8f9ed7b3a
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
