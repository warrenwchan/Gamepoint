import React, { Component } from 'react';
import styles from './styles.css';
import { createContainer } from 'meteor/react-meteor-data';

import Game from './Game';
import AddPlayerButton from './../../../components/AddPlayersButton'

class AddPlayers extends Component {

    render() {

        const friends = this.props.friends

        const appendFriends = () => {
            if (friends.length) {
                return friends.map((friend, i) =>
                    <Game
                        buttonIcon={<i className="fa fa-plus" aria-hidden="true"></i>}
                        key={i}
                        friendObject={friend}
                        onClick={() => (this.props.friendClick(friend))}
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
            </div>
        );
    };
};

export default AddPlayers;
