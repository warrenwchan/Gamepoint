import React, { Component } from 'react';
import BigContainer from '../../components/BigContainer';
import { Meteor } from 'meteor/meteor';


import Player from './Player';
import ScoreCount from './ScoreCount';
import GameActivity from './GameActivity';
import GreenButton from './../../components/GreenButton';

class ScoreBoard extends Component {

  handleSubmit(){
    const mockData = {
      leftTeam: ['John'],
      leftScore: 16,
      rightTeam: ['Warren'],
      rightScore: 21
    };
    Meteor.call('games.addgame', mockData);
  }
  render() {
    return (
      <BigContainer title="game 1">
        <div>
          <ScoreCount/>
          <GameActivity/>
          <GreenButton onClick={() => this.handleSubmit() } title='log'/>
        </div>
      </BigContainer>
    );
  }
}

export default ScoreBoard;
