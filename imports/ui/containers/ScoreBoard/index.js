import React, { Component } from 'react';
import BigContainer from '../../components/BigContainer';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import ScoreCount from './ScoreCount';
import GameActivity from './GameActivity';
import GreenButton from './../../components/GreenButton';
import { Games } from './../../../api/games';
import styles from './styles.css';

class ScoreBoard extends Component {

  handleSubmit(){
    console.log('hello');
    console.log('this.props.game', this.props.game.leftScore);
    const leftScore = this.props.game.leftScore;
    const rightScore = this.props.game.rightScore;
    const leftWin = this.props.game.leftWin;
    const gameId = this.props.game._id;
    if(leftScore > rightScore ){
      Meteor.call('games.leftWin', gameId)
    }else{
      Meteor.call('games.rightWin', gameId)
    }
  }

  render() {
    console.log(this.props.game);
    return (
      <div>
        {
          !this.props.game &&
          <p>Loading...</p>
        }
        {
          !!this.props.game &&
          <BigContainer className='scoreBoardContainer' title="Game">
            <div>
              <ScoreCount
                gameId={this.props.match.params.id}
                leftScore={this.props.game.leftScore}
                leftTeam={this.props.game.leftTeam}
                rightScore={this.props.game.rightScore}
                rightTeam={this.props.game.rightTeam}
              />
              <GameActivity
                leftScore={this.props.game.leftScore}
                leftTeam={this.props.game.leftTeam}
                rightScore={this.props.game.rightScore}
                rightTeam={this.props.game.rightTeam}
              />
              <GreenButton onClick={() => this.handleSubmit() } title='Log Game'/>
            </div>
          </BigContainer>
        }
      </div>
    );
  }
}

export default createContainer((props) => {
  const handleGames = Meteor.subscribe('games');
  return{
    game : Games.findOne(props.match.params.id)
  };
}, ScoreBoard)
