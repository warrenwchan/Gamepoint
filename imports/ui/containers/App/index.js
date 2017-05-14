import React, { Component} from 'react';
import BigContainer from './../../components/BigContainer';
import GreenButton from './../../components/GreenButton';
import RedButton from './../../components/RedButton';

export default class App extends Component {
  render() {
    return (
      <div>
        <GreenButton/>
        <RedButton/>
      </div>
    );
  }
}
