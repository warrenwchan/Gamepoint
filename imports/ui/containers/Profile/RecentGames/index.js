import React, { Component } from 'react';
import styles from './styles.css';
import { createContainer } from 'meteor/react-meteor-data';

import Game from './Game';
import { Games } from './../../../../api/games'

class RecentGames extends Component {
    constructor() {
        super();
        this.state = {

        }
    }


    removeGame() {
        console.log('fuck yes')
        // game.remove(game._id);
    }

    getGames () {
        if (this.props.games) {
            return this.props.games
        } return "No games"
    }

    matchGames(games) {
        const matches = [];
        games.forEach(function(games) {
            if (games.owner === this.props.currentUserId) {
                (matches.push( games ))
            }
        }, this);
        return matches
    }


    render() {

        const games = this.props.games
        const matchedIds = this.matchGames(games)
        const renderGames = matchedIds.map((matchedId, i) =>
            <Game
                buttonIcon={<i className="fa fa-times" aria-hidden="true"></i>}
                key={i}
                text={matchedId.time}
                onClick={this.removeGame}
            />
        )

        return (
            <div className="recentGames">
                <div className="sectionTitle">
                    <h1>{this.props.title}</h1>
                </div>
                <ul id="gamesList">
                    {renderGames}
                </ul>
            </div>
        );
    }
};

export default createContainer(() => {
    const handleProfiles = Meteor.subscribe('profiles');
    const handleGames = Meteor.subscribe('games');
    const games = Games.find({});
    return {
        currentUser: Meteor.user(),
        currentUserId: Meteor.userId(),
        games: games.fetch()
    };
},  RecentGames);
