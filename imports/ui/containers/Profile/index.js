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

    buttonToggle () {
        this.setState({
            active: !this.state.active
        });
        console.log(this.state.active)
    }

    toggleFriends () {
        if (this.state.active) {
            return <AddPlayers title="friends" onClick={this.buttonToggle.bind(this)}/>;
        }
        return <SearchPlayers onClick={this.buttonToggle.bind(this)} />;
    }

    username () {
        return Meteor.user()._id;
    }

    render() {
        console.log(this.username)
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
                            title="hello"
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
  Meteor.subscribe('todos');

  return {
    currentUser: Meteor.user(),
    currentUserId: Meteor.userId(),
  };
}, Profile);
