import React, { Component } from 'react';
import styles from './styles.css';
import { createContainer } from 'meteor/react-meteor-data';

import Game from './../RecentGames/Game';
import AddPlayerButton from './../../../components/AddPlayersButton'

class AddPlayers extends Component {

    render() {

        const friends = this.props.currentUser.profile.friends

        const appendFriends = () => {
            console.log(friends.length)
            if (friends.length) {
                return friends.map((friend, i) =>
                    <Game
                        buttonIcon={<i className="fa fa-times" aria-hidden="true"></i>}
                        key={i}
                        text={friend}
                        onClick={console.log('hello')}
                    />
                )
            } return <li> "no friends" </li>
        };

        return (
            <div className="addPlayers">
                <div className="sectionTitle">
                    <h1>{this.props.title}</h1>
                </div>
                <ul>
                    {appendFriends()}
                </ul>
                <button onClick={()=> this.props.onClick()} className="addPlayersButton">+ Add Players</button>
            </div>
        );
    };
};

export default createContainer(() => {
  Meteor.subscribe('profiles');

  return {
    allUsers: Meteor.users.find({}, { fields: { 'emails': 1 } }).fetch(),
    currentUser: Meteor.user(),
    currentUserId: Meteor.userId(),
  };
}, AddPlayers);
