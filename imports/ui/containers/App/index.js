import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom'

// route components
import BigContainer from '../../components/BigContainer';
import MedContainer from '../../components/MediumContainer';
import SmallContainer from '../../components/SmallContainer';
import Login from './../Login';
import DashBoard from './../DashBoard';
import Profile from './../Profile';
import QuickGame from './../QuickGame';

export default class App extends React.Component {

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" component={DashBoard}></Route>
        </Switch>
      </Router>
    );
  }
}
