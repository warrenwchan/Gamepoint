import React from 'react';
import styles from './styles.css';

const GameStat = ({teamA, teamB, scoreA, scoreB, time }) => (
    <li className="game">
        <div className="gameContain">
            <div className="statRow">
                <h3 className="playerName">{teamA}</h3>
                <h3 className="playerScore">{scoreA}</h3>
            </div>
            <div className="statRow">
                <h3 className="playerName">{teamB}</h3>
                <h3 className="playerScore">{scoreB}</h3>
            </div>
            <p className="statTime">{time}</p>
        </div>
    </li>
);

export default GameStat;
