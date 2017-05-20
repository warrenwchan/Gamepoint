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

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// route components
import Login from './../Login';
import Home from './../Home';
import Profile from './../Profile';
import QuickGame from './../QuickGame';
import Preset from '../Preset';
import AccountsUIWrapper from '../../components/AccountsUIWrapper';
import ScoreBoard from '../ScoreBoard';
import QuickGame1v1 from '../../containers/QuickGame';
import QuickGame2v2 from '../../containers/QuickGame2v2';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

class App extends Component {

  render() {
    // console.log('this is this.props.games', this.props.games);
    return (
      <MuiThemeProvider>
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
                  <Route exact path="/quickgame/1v1" component={QuickGame1v1}/>
                  <Route exact path="/quickgame/2v2" component={QuickGame2v2}/>
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
      </MuiThemeProvider>
    );
  }
}

App.propTypes = {
  currentUser: PropTypes.object,
  currentUserId: PropTypes.string,
};

export default createContainer(() => {
  const handleProfiles = Meteor.subscribe('profiles');
  const handleGames = Meteor.subscribe('games');
  const games = Games.find({});
  return{
    currentUser: Meteor.user(),
    currentUserId: Meteor.userId(),
    games: games.fetch()
  };
}, App)
