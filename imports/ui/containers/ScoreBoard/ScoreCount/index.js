import React, { Component } from 'react';
import styles from './styles.css';

const ScoreCount = ({ children }) => (
  <div>
    <div className='players'>
      <p> Player 1</p>
      <p> Player 2</p>
    </div>
    <div className='scoreBoard'>
      <div>
        <h1> SCORE1</h1>
      </div>
      <div className='scoreMiddle'>
        <div className='arrows'>
          <i className="fa fa-caret-up fa-lg"></i>
          <i className="fa fa-caret-down fa-lg"></i>
        </div>
        <div>
          <p>
            vs
          </p>
        </div>
        <div className='arrows'>
          <i className="fa fa-caret-up fa-lg"></i>
          <i className="fa fa-caret-down fa-lg"></i>
        </div>
      </div>
      <div>
        <h1> SCORE 2</h1>
      </div>
    </div>
  </div>
);
export default ScoreCount;
