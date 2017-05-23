import React,{ Component } from 'react';
import styles from './styles.css'

const MedContainer = ({title, subtitle, children}) => (
  <div className="medContainer">
      <div className="medContainerBanner">
        <h1 className="medTitle">{title}</h1>
        <h2 className="medSubTitle">{subtitle}</h2>
      </div>
      <div className="medContent">{children}</div>
  </div>
);

export default MedContainer;
