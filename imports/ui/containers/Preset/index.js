import React, { Component } from 'react';
import MedContainer from '../../components/MediumContainer';
import styles from './styles.css'
;
import PresetSelection from './PresetSelection';

class Preset extends Component {
  render() {
    return (
      <MedContainer title="Quick Game" subtitle="Select Preset">
        <div className='preset'>
          <PresetSelection/>
          <p>Create Presets +</p>
        </div>
      </MedContainer>
    );
  }
}

export default Preset;
