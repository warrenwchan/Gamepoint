import React, { Component } from 'react';
import BigContainer from '../../components/BigContainer';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import ScoreCount from './ScoreCount';
import GameActivity from './GameActivity';
import GreenButton from './../../components/GreenButton';
import { Games } from './../../../api/games';

class ScoreBoard extends Component {

  handleSubmit(){
    const mockData = {
      leftTeam: ['John'],
      leftScore: 16,
      rightTeam: ['Warren'],
      rightScore: 21,
      owner: Meteor.userId()
    };
    Meteor.call('games.addGame', mockData);
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
          <BigContainer title="Game">
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
              <GreenButton onClick={() => this.handleSubmit() } title='log'/>
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
