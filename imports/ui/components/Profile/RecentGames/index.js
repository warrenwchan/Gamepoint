import React, { Component } from 'react';
import styles from './styles.css';

const RecentGames = ({ title }) => (
    <div className="recentGames">
        <div className="sectionTitle">
            <h1>{title}</h1>
        </div>
        <ul>
            <li>GAME 1 12:15 - 05/11/17</li>
        </ul>
    </div>
);

export default RecentGames;
