import React, { Component } from 'react';
import styles from './styles.css';

import AddPlayerButton from './../../../components/AddPlayersButton'

class AddPlayers extends Component {


    render() {
        return (
            <div className="addPlayers">
                <div className="sectionTitle">
                    <h1>{this.props.title}</h1>
                </div>
                <ul>
                    <li>Player 1</li>
                    <li>Player 2</li>
                    <li>Player 3</li>
                </ul>
                <button onClick={()=> this.props.onClick()} className="addPlayersButton">+ Add Players</button>
            </div>
        );
    };
};

export default AddPlayers;
