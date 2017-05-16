import React from 'react';

const Game = ({ game, text }) => (
    <li className="game">
        {text}
        <i class="fa fa-times" aria-hidden="true"></i>
    </li>
);

export default Game;
