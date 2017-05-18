import React, { Component } from 'react';
import styles from './styles.css';

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
