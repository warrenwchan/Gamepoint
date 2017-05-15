import React, { Component } from 'react';
import styles from './styles.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom'

import Menu from './Menu';
import Profile from './../Profile';
import QuickGame from './../QuickGame';

const Home = () => (
    <div className="homeContain">
        <Menu />
        <div className="mainApp">

        </div>
    </div>
);

export default Home;
