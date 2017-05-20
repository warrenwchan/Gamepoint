import React, { Component } from 'react';
import styles from './styles.css';
import { createContainer } from 'meteor/react-meteor-data';

import Game from './Game';

class RecentGames extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

    removeGame() {
        game.remove(game._id);
    }

    // renderGames () {
    //     if (this.props.currentUser.profile.games)
    // }

    render() {

        return (
            <div className="recentGames">
                <div className="sectionTitle">
                    <h1>{this.props.title}</h1>
                </div>
                <ul id="gamesList">
                    {/*<Game text={this.props.currentUser.profile.games} />*/}
                    <Game text="GAME 2 12:15 - 05/11/17" />
                    <Game text="GAME 3 12:15 - 05/11/17" />
                </ul>
            </div>
        );
    }
};

export default createContainer(() => {
    Meteor.subscribe('profiles');
    return {
        currentUser: Meteor.user(),
        currentUserId: Meteor.userId(),
    };
    Meteor.subscribe('games');
    return {
        games: Meteor.games()
    };
},  RecentGames);
