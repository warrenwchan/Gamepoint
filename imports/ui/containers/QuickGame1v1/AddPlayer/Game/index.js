import React from 'react';
import styles from './styles.css';

const Game = ({ text, onClick, buttonIcon, friendObject }) => (
    <li className="game">
        {friendObject.email}
        <button onClick={onClick}>
            {buttonIcon}
        </button>
    </li>
);

export default Game;
