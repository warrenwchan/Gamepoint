import React from 'react';

import BigContainer from '../../components/BigContainer';
import MedContainer from '../../components/MediumContainer';
import SmallContainer from '../../components/SmallContainer';
import DashBoard from './../DashBoard';

export default class App extends React.Component {

  render() {
    return (
      <div>
        <DashBoard>
          <SmallContainer />
        </DashBoard>
      </div>
    );
  }
}
