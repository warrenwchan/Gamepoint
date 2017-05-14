import React from 'react';

import BigContainer from '../../components/BigContainer';
import MedContainer from '../../components/MediumContainer';
import SmallContainer from '../../components/SmallContainer';
import DashDrawer from './../DashDrawer';

export default class App extends React.Component {

  render() {
    return (
      <div>
        {/*<SmallContainer
          title="Small Title"
        />
        <MedContainer
          title="Medium title"
          subtitle="subtitle"
        />
        <BigContainer
          title={"Big Title"}
        />*/}
        <DashDrawer />
      </div>
    );
  }
}
