import React, { Component } from 'react';
import styles from './styles.css';

import Game from './Game';

export default class RecentGames extends Component {

    render() {
        return (
            <div className="recentGames">
                <div className="sectionTitle">
                    <h1>{this.props.title}</h1>
                </div>
                <ul>
                    <Game text="GAME 1 12:15 - 05/11/17"/>
                    <Game text="GAME 2 12:15 - 05/11/17"/>
                    <Game text="GAME 3 12:15 - 05/11/17"/>
                </ul>
            </div>
        );
    }
};
