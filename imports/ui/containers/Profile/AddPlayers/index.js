import React, { Component } from 'react';
import styles from './styles.css';

const AddPlayers = ({ title }) => (
    <div className="addPlayers">
        <div className="sectionTitle">
            <h1>{title}</h1>
        </div>
        <ul>
            <li>Player 1</li>
            <li>Player 2</li>
            <li>Player 3</li>
        </ul>
    </div>
);

export default AddPlayers;
