import React from 'react';

const Game = ({ game, text, onClick }) => (
    <li className="game">
        {text}
        <button onClick={onClick}>
            <i className="fa fa-times" aria-hidden="true"></i>
        </button>
    </li>
);

export default Game;
