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
<<<<<<< HEAD
          <QuickGame/>
=======
          <BigContainer title="Profile">
            <Profile />
          </BigContainer>
>>>>>>> 4b2a11b266b0835838679e1561db68b76ee18299
        </DashBoard>
      </div>
    );
  }
}
