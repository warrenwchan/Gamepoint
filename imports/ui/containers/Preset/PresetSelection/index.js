import React, { Component } from 'react';
import styles from './styles.css';

import CategoryButton from './../../../components/CategoryButton';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom'

const PresetSelection = (title) => (
  <div className="choices">
        <Link to="/quickgame/addplayers">
          <CategoryButton title={title}/>
        </Link>
  </div>
);

export default PresetSelection;
