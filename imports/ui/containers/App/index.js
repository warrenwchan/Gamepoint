import React from 'react';

import BigContainer from '../../components/BigContainer';
import MedContainer from '../../components/MediumContainer';
import SmallContainer from '../../components/SmallContainer';
import DashBoard from './../DashBoard';
import Profile from './../../components/Profile';
import QuickGame from './../QuickGame';

export default class App extends React.Component {

  render() {
    return (
      <div>
        <DashBoard>
          <BigContainer title="Profile">
            <Profile />
          </BigContainer>
        </DashBoard>
      </div>
    );
  }
}
