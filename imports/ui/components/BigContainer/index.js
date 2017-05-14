import React,{ Component } from 'react';
import styles from './styles.css'

const BigContainer = ({ title, children }) => (
  <div className="bigContainer">
      <div className="bigContainerBanner">
          <h1>{title}</h1>
      </div>
      <div className="bigContent">{children}</div>
  </div>
);

export default BigContainer;
