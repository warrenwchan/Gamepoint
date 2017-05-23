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
    // console.log(this.props.leftTeam[0])
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
  addCommas(team){
    return team.map((element, index) => {
      if (index === team.length-2){
        return `${element}, `
      } return element
    })
  }
  render() {
    console.log()
    return (
      <div>
        <div className='players'>
          <p className='scoreCountName'>
            {this.addCommas(this.props.leftTeam).filter((person) => {
              return `${person}`;
            })}
          </p>
          <p> vs </p>
          <p className='scoreCountName'>
            {this.addCommas(this.props.rightTeam).filter((person) => {
             return `${person} `;
            })}
          </p>
        </div>
        <div className='scoreBoard'>
          <div>
            <h1>{this.props.leftScore}</h1>
          </div>
          <div className='scoreMiddle'>
            <div className='arrows'>
              <button onClick={() => this.leftIncrement()}><i className="fa fa-caret-up fa-lg arrow"></i></button>
              <button onClick={() => this.leftDecrement()}><i className="fa fa-caret-down fa-lg arrow"></i></button>
            </div>
            <div>
            </div>
            <div className='arrows'>
              <button onClick={() => this.rightIncrement()}><i className="fa fa-caret-up fa-lg arrow"></i></button>
              <button onClick={() => this.rightDecrement()}><i className="fa fa-caret-down fa-lg arrow"></i></button>
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
