import React,{ Component } from 'react';
import styles from './styles.css'

const SmallContainer = ({title}) => (
  <div className="smallContainer">
    <div className="smallContainerBanner">
      <h1>{title}</h1>
    </div>
    <div className="smallContent"></div>
  </div>
);

export default SmallContainer;

