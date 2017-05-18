import React, { Component } from 'react';
import BigContainer from '../../components/BigContainer';

import Player from './Player';
import ScoreCount from './ScoreCount';
import GameActivity from './GameActivity';

class ScoreBoard extends Component {
  render() {
    return (
      <BigContainer title="game 1">
        <div>
          <ScoreCount/>
          <GameActivity/>
        </div>
      </BigContainer>
    );
  }
}

export default ScoreBoard;
