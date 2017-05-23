import React from 'react';
import styles from './styles.css';

const Game = ({ text, onClick, buttonIcon, teamA, teamB, scoreA, scoreB }) => (
    <li className="game">
        {text}
        <button className="selectButton" onClick={onClick}>
            {buttonIcon}
        </button>
    </li>
);

export default Game;
