import React, { Component } from 'react';
import styles from './styles.css';
import { createContainer } from 'meteor/react-meteor-data';


import BigContainer from '../../components/BigContainer';
import RecentGames from './RecentGames';
import Stats from './Stats';
import AddPlayers from './AddPlayers';
import SearchPlayers from './SearchPlayers';
import { Games } from './../../../api/games'

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: true,
         };
         this.toggleFriends = this.toggleFriends.bind(this);
    }

    componentWillMount() {
        if (!this.props.currentUser.profile) {
            Meteor.users.update({_id: Meteor.userId()}, { $set: { 'profile.stats.win': 0}});
            Meteor.users.update({_id: Meteor.userId()}, { $set: { 'profile.stats.loss': 0}});
        }
    }

    buttonToggle () {
        this.setState({
            active: !this.state.active
        });
    }

    toggleFriends () {
        if (this.state.active) {
            return <AddPlayers title="friends" onClick={this.buttonToggle.bind(this)}/>;
        }
        return <SearchPlayers onClick={this.buttonToggle.bind(this)} />;
    }

    winStat () {
        if (this.props.currentUser.profile) {
            return this.props.currentUser.profile.stats.win;
        }
        return '0';
    }

    lossStat () {
        if (this.props.currentUser.profile) {
            return this.props.currentUser.profile.stats.loss;
        }
        return '0';
    }

    render() {

        console.log(this.props.games, "game list")
        console.log(this.props.currentUser, "current user")
        const gamesList = this.props.games

        const getGameWin = gamesList.map(( games ) => {
            console.log(games.rightTeam[0], 'right team')
            console.log(this.props.currentUser.emails[0].address, 'current user email')
            if ( games.leftTeam[0] === this.props.currentUser.emails[0].address ) {
                if (games.leftWin === true ) {
                    return this.props.currentUser.profile.stats.win ++
                } return this.props.currentUser.profile.stats.loss ++
            } else if (games.leftScore && games.rightScore === 0) {
                return this.props.currentUser.profile.stats.loss --
            }
        });


        return (
            <BigContainer title="Profile">
                <div className="profileContainer">
                    <div className="section leftSection">
                        <RecentGames
                            title="Recent Games"
                        />
                    </div>
                    <div className="section statsSection">
                        <Stats
                            title={this.props.currentUser.emails[0].address}
                            wins={this.winStat()}
                            losses={this.lossStat()}
                        />
                    </div>
                    <div className="section rightSection">
                        {this.toggleFriends()}
                    </div>
                </div>
            </BigContainer>
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
}, Profile);
