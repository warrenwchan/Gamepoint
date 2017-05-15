import React from 'react';

import BigContainer from '../../components/BigContainer';
import MedContainer from '../../components/MediumContainer';
import SmallContainer from '../../components/SmallContainer';
import BigContainerContent from './../BigContainerContent';
import DashBoard from './../DashBoard';
import Profile from './../../components/Profile';
import QuickGame from './../QuickGame';

export default class App extends React.Component {

  render() {
    return (
      <div>
        <DashBoard>
          <QuickGame/>
        </DashBoard>
      </div>
    );
  }
}
