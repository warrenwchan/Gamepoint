import React, { Component } from 'react';
import styles from './styles.css';
import { Meteor } from 'meteor/meteor';
import { Games } from './../../../../api/games';

class scoreCount extends Component {
  constructor(){
    super();
    this.state={
      switch: false
    }
    this.handleKeyPress = this.handleKeyPress.bind(this)
  }
  leftIncrement(){
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
  toggleSwitch(){
    this.setState({switch: !this.state.switch});
  }
  handleKeyPress(e){
    e.preventDefault();
    if(e.keyCode === 81){
      (this.state.switch) ? this.rightIncrement() : this.leftIncrement();
    }else if(e.keyCode === 65){
     (this.state.switch) ? this.rightDecrement() : this.leftDecrement();
    }else if(e.keyCode === 69){
      (this.state.switch) ? this.leftIncrement() : this.rightIncrement();
    }else if (e.keyCode === 68){
      (this.state.switch) ? this.leftDecrement() : this.rightDecrement();
    }else if(e.keyCode === 32){
      this.toggleSwitch();
    }
  }
  componentDidMount(){
    document.addEventListener('keydown',this.handleKeyPress);
  }
  componentWillUnmount(){
    document.removeEventListener('keydown',this.handleKeyPress);
  }
  addCommas(team){
    return team.map((element, index) => {
      if (index === team.length-2){
        return `${element}, `
      } return element
    })
  }
  render() {
    return (
      <div>
        <div className={(this.state.switch) ? 'playersSwitch' : 'players'}>
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
        <div className={(this.state.switch) ? 'scoreBoardSwitch' : 'scoreBoard'}>
          <div>
            <h1>{this.props.leftScore}</h1>
          </div>
          <div className={(this.state.switch) ? 'scoreMiddleSwitch' : 'scoreMiddle'}>
            <div className='arrows'>
              <button onClick={() => this.leftIncrement()}><i className="fa fa-caret-up fa-lg arrow"></i></button>
              <button onClick={() => this.leftDecrement()}><i className="fa fa-caret-down fa-lg arrow"></i></button>
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
