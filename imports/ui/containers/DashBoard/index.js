import React, { Component } from 'react';
import styles from './styles.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom'

import DashDrawer from './DashDrawer';
import Profile from './../Profile';
import QuickGame from './../QuickGame';

const DashBoard = () => (
    <div className="dashBoardContain">
        <DashDrawer />
        <div className="mainApp">
            <Router>
                <Switch>
                    <Route path="/profile" component={Profile}/>
                    <Route path="/quickgame" component={QuickGame}/>
                </Switch>
            </Router>
        </div>
    </div>
);

export default DashBoard;
