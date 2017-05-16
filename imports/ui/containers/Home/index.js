import React, { Component } from 'react';
import styles from './styles.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom'

import Menu from './Menu';

const Home = ({ children }) => (
    <div className="homeContain">
        <Menu />
        <div className="mainApp">
            { children }
        </div>
    </div>
);

export default Home;
