import React,{ Component } from 'react';
import styles from './styles.css'

const MedContainer = ({title, subtitle}) => (
  <div className="medContainer">
      <div className="medContainerBanner">
        <div className="medTitle"><h1>{title}</h1></div>
        <div className="medSubTitle"><h2>{subtitle}</h2></div>
      </div>
      <div className="medContent"></div>
  </div>
);

export default MedContainer;
