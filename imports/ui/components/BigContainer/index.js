<<<<<<< HEAD
import React, { Component } from 'react';
import styles from './styles.css'

export default class BigContainer extends Component {
  render() {
    return (
      <div className="bigContainer">
          <div className="containerBanner">
              <h1>title</h1>
          </div>
=======
import React,{ Component } from 'react';
import styles from './styles.css'

const BigContainer = ({ title, children }) => (
  <div className="bigContainer">
      <div className="bigContainerBanner">
          <h1>{title}</h1>
>>>>>>> 9330a026fc9244ca35565187132da88dbc80136d
      </div>
      <div className="bigContent">{children}</div>
  </div>
);

export default BigContainer;
