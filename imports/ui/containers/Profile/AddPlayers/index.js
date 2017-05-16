import React, { Component } from 'react';
import styles from './styles.css';

import AddPlayerButton from './../../../components/AddPlayersButton'

const AddPlayers =({ title }) => {

    function handleClick(e) {
        e.preventDefault();
        console.log('The link was clicked.');
    }

    return (
        <div className="addPlayers">
            <div className="sectionTitle">
                <h1>{title}</h1>
            </div>
            <ul>
                <li>Player 1</li>
                <li>Player 2</li>
                <li>Player 3</li>
            </ul>
            <AddPlayerButton onClick={handleClick} />
        </div>
<<<<<<< HEAD
        <ul>
            <li>Player 1</li>
            <li>Player 2</li>
            <li>Player 3</li>
        </ul>
        <button className="addPlayersButton">+ Add Players</button>
    </div>
);
=======
    );
};
>>>>>>> 1e8d056f385fb1bab7e7ecf103e6e520ac738eea

export default AddPlayers;
