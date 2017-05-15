import React, { Component } from 'react';
import styles from './styles.css';
import BigContainerContent from './../../containers/BigContainerContent';
import AddPlayer from './AddPlayer';
import FriendSearch from './FriendSearch';
import SearchResult from './SearchResult';

const BigContainer = ({ title, subTitle, children }) => (
  <div className="bigContainer">
      <div className="bigContainerBanner">
          <h1>{title}</h1>
          <h1>{subTitle}</h1>
      </div>
      <div className="bigContent">{children}</div>
  </div>
);

class QuickGame extends Component {
    render() {
        return (
            <div className="quickGame">
                <BigContainer title="quick game" subTitle="add players">
                    <BigContainerContent>
                        <div className="content">
                            <AddPlayer/>
                            <div className="results">
                                <FriendSearch/>
                                <SearchResult/>
                            </div>
                        </div>
                    </BigContainerContent>
                </BigContainer>
            </div>
        );
    }
}

export default QuickGame;
