import React from 'react';
import styles from './styles.css';

const Game = ({ text, onClick, buttonIcon }) => (
    <li className="game">
        {text.email}
        <button onClick={onClick}>
            {buttonIcon}
        </button>
    </li>
);

export default Game;
