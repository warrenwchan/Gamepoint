import React, { Component } from 'react';
import styles from './styles.css';

import CategoryButton from './../../components/CategoryButton'
import BigContainer from './../../components/BigContainer';

class QuickGame extends Component {
  Constructor{
    super();
  }

    render() {
        return (
            <div className="dashDrawer">
                <div className="heading">
                    <h1>dashboard</h1>
                </div>
                <div className="dashContent">
                    <CategoryButton title="quickgame" />
                    <CategoryButton title="profile" />
                    <CategoryButton title="leagues" />
                    <CategoryButton title="logout" />
                </div>
            </div>
        );
    }
}

export default QuickGame;
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
