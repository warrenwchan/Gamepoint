import React, { Component } from 'react';
import styles from './styles.css';
import { createContainer } from 'meteor/react-meteor-data';


import BigContainer from '../../components/BigContainer';
import RecentGames from './RecentGames';
import Stats from './Stats';
import AddPlayers from './AddPlayers';
import SearchPlayers from './SearchPlayers';

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
  Meteor.subscribe('profiles');

  return {
    currentUser: Meteor.user(),
    currentUserId: Meteor.userId(),
  };
}, Profile);
