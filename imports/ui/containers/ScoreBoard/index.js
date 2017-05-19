import React, { Component } from 'react';
import BigContainer from '../../components/BigContainer';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';



import Player from './Player';
import ScoreCount from './ScoreCount';
import GameActivity from './GameActivity';
import GreenButton from './../../components/GreenButton';
import { Games } from './../../../api/games';


class ScoreBoard extends Component {

  constructor() {
    super();
    this.state = {};
  }

  componentWillReceiveProps() {
    const game = Games.findOne(this.props.match.params.id);
    this.setState({ game });
  }

  handleSubmit(){
    const mockData = {
      leftTeam: ['John'],
      leftScore: 16,
      rightTeam: ['Warren'],
      rightScore: 21,
      owner: Meteor.userId()
    };
    Meteor.call('games.addgame', mockData);
  }

  render() {
    const { game } = this.state;

    return (
      <div>
        {
          !game &&
          <p>Loading...</p>
        }
        {
          !!game &&
          <BigContainer title="game 1">
            <div>
              <ScoreCount leftScore={game.leftScore} rightScore={game.rightScore}/>
              <GameActivity/>
              <GreenButton onClick={() => this.handleSubmit() } title='log'/>
            </div>
          </BigContainer>
        }
      </div>
    );
  }
}

export default ScoreBoard;

// createContainer(() => {

//   let game;

//   const handleGames = Meteor.subscribe('games');


//   return{
//     currentUser: Meteor.user(),
//     currentUserId: Meteor.userId(),
//     game: game
//   };
// }, ScoreBoard)
