import React from 'react';
import styles from './styles.css';

const Game = ({ text, onClick, buttonIcon }) => (
    <li className="game">
        {text}
<<<<<<< HEAD
        <button className="selectButton" onClick={onClick}>
=======
        <button onClick={onClick}>
>>>>>>> 4501f8cc5d855c44a87133d8dc97c0f8710fc703
            {buttonIcon}
        </button>
    </li>
);

export default Game;
