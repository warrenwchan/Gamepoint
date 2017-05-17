import React, { Component } from 'react';
import styles from './styles.css';

const ScoreCount = ({ children }) => (
  <div>
    <div>
      <p> Player 1</p>
      <p> Player 2</p>
    </div>
    <div>
      <h1> SCORE1</h1>
      <div>
        <div><p>up arrow</p><p>down arrow</p></div>
        <div><p>vs</p></div>
        <div><p>up arrow</p><p>down arrow</p></div>
      </div>
    </div>
  </div>
);
export default ScoreCount;
