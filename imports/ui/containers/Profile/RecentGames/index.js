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

    getGames () {
        if (this.props.games) {
            return this.props.games
        };
    };

    matchGames(gamesList) {
        const matches = [];
        gamesList.map((gamesList) => {
            if (gamesList.owner === this.props.currentUserId) {
                (matches.push( gamesList ))
            }
        });
        return matches
    };

    removeGame(matchedId) {
        this.props.games.remove(matchedId._id);
    };


    render() {

        const gamesList = this.props.games
        console.log(gamesList, "gamesList")

        const matchedIds = this.matchGames(gamesList)
        console.log(matchedIds, "matchedIds")

        const renderGames = matchedIds.map((matchedId, i) =>
            <Game
                buttonIcon={<i className="fa fa-times" aria-hidden="true"></i>}
                key={i}
                text={matchedId.time}
                onClick={() => (this.removeGame(matchedId))}
            />
        );

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
    };
};


export default createContainer(() => {
    const handleProfiles = Meteor.subscribe('profiles');
    const handleGames = Meteor.subscribe('games');
    const findGames = Games.find({});
    return {
        currentUser: Meteor.user(),
        currentUserId: Meteor.userId(),
        games: findGames.fetch()
    };
},  RecentGames);
