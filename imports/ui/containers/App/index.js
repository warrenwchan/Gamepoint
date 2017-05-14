import React from 'react';
import BigContainer from '../../components/BigContainer';
import MedContainer from '../../components/MediumContainer';
import SmallContainer from '../../components/SmallContainer';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <SmallContainer />
        <MedContainer />
        <BigContainer />
      </div>
    );
  }
}
