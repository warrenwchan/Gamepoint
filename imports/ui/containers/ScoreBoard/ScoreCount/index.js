import React, { Component } from 'react';
import styles from './styles.css';
import { Meteor } from 'meteor/meteor';
import { Games } from './../../../../api/games';

class scoreCount extends Component {
  constructor(){
    super();
    this.state={}
  }
  leftIncrement(){
    console.log(this.props.leftTeam[0])
    const gameId = this.props.gameId;
    Meteor.call('games.leftIncrement', gameId);
  }
  leftDecrement(){
    const gameId = this.props.gameId;
    Meteor.call('games.leftDecrement', gameId);
  }
  rightIncrement(){
    const gameId = this.props.gameId;
    Meteor.call('games.rightIncrement', gameId);
  }
  rightDecrement(){
    const gameId = this.props.gameId;
    Meteor.call('games.rightDecrement', gameId);
  }
  render() {
    return (
      <div>
        <div className='players'>
          {this.props.leftTeam.filter((person) => {
            return `<p> ${person} </p>`;
          })}
          <p> Versus </p>
          {this.props.rightTeam.filter((person) => {
            return `${person} `;
          })}
        </div>
        <div className='scoreBoard'>
          <div>
            <h1>{this.props.leftScore}</h1>
          </div>
          <div className='scoreMiddle'>
            <div className='arrows'>
              <button onClick={() => this.leftIncrement()}><i className="fa fa-caret-up fa-lg"></i></button>
              <button onClick={() => this.leftDecrement()}><i className="fa fa-caret-down fa-lg"></i></button>
            </div>
            <div>
              <p>
                vs
              </p>
            </div>
            <div className='arrows'>
              <button onClick={() => this.rightIncrement()}><i className="fa fa-caret-up fa-lg"></i></button>
              <button onClick={() => this.rightDecrement()}><i className="fa fa-caret-down fa-lg"></i></button>
            </div>
          </div>
          <div>
            <h1>{this.props.rightScore}</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default scoreCount;
