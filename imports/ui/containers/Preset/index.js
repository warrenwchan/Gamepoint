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
  constructor(){
    super();
    this.state={
      gameMode:''
    };
  }

  single(event){
    event.preventDefault();
    console.log('hello')
    this.setState({});
  }
  duo(event){
    event.preventDefault();
    this.setState({});
  }
  render() {
    return (
      <MedContainer title="Quick Game" subtitle="Select Preset">
        <div>
          <div className='preset'>
            <Link to="/quickgame/1v1">
              <CategoryButton onClick={this.single} params={{ testValue: 'hiiiiii'}} title='1v1'/>
            </Link>
            <Link to="/quickgame/2v2">
              <CategoryButton onClick={this.duo} title='2v2'/>
            </Link>
          </div>
        </div>
      </MedContainer>
    );
  }
}

export default Preset;
