import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.css';
import { Games } from './../../../api/games';

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
import AddPlayers from '../../containers/QuickGame';

class App extends Component {

  render() {

    return (
      <Router>
        <Login>
          <AccountsUIWrapper />
          {this.props.currentUser ? (
            <Home >
              <Switch>
                {/*<Route exact path="/" component={Home} />*/}
                {/*<Route exact path="/login" component={Login} />*/}
                <Route exact path="/profile" component={Profile} />
                <Route exact path="/quickgame" component={QuickGame} />
                <Route exact path="/quickgame/addplayers" component={AddPlayers}/>
                <Route exact path="/quickgame/presets" component={Preset} />
                <Route exact path="/quickgame/:id/scoreboard"  component={ScoreBoard} />
              </Switch>
            </Home>
          ): (
              <div className="logged-out-message">
                <h1>GamePoint</h1>
              </div>
          )}
        </Login>
      </Router>
    );
  }
}

App.propTypes = {
  currentUser: PropTypes.object,
  currentUserId: PropTypes.string,
};

export default createContainer(() => {
  // const handleMeteor.subscribe('profiles');
  const handleGames = Meteor.subscribe('games');
  const games = Games.find({});
  return{
    currentUser: Meteor.user(),
    currentUserId: Meteor.userId(),
    games: games.fetch()
  };
}, App)
