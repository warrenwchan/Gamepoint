import React,{ Component } from 'react';
import styles from './styles.css'

import BigContainerContent from './../../containers/BigContainerContent';

const BigContainer = ({ title, children }) => (
  <div className="bigContainer">
      <div className="bigContainerBanner">
          <h1>{title}</h1>
      </div>
      <BigContainerContent>
          {children}
      </BigContainerContent>
  </div>
);

export default BigContainer;
