import React, { Component } from 'react';
import MedContainer from '../../components/MediumContainer';
import styles from './styles.css';

import PresetSelection from './PresetSelection';
import CategoryButton from '../../components/CategoryButton';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom'

class Preset extends Component {
  render() {
    return (
      <MedContainer title="Quick Game" subtitle="Select Preset">
        <div>
          <div className='preset'>
            <Link to="/quickgame/1v1">
              <CategoryButton title='1v1'/>
            </Link>
            <Link to="/quickgame/2v2">
              <CategoryButton title='2v2'/>
            </Link>
          </div>
        </div>
      </MedContainer>
    );
  }
}

export default Preset;
