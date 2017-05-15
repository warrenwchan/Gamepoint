import React, { Component } from 'react';
import styles from './styles.css';
import BigContainerContent from './../../containers/BigContainerContent';
import AddPlayer from './AddPlayer';
import FriendSearch from './FriendSearch';
import SearchResult from './SearchResult';
import MedContainer from './../../components/MediumContainer';

class QuickGame extends Component {
    render() {
        return (
            <MedContainer title="Quick Game" subtitle="Add Players">
                <div className="quickGame">
                    <AddPlayer/>
                    <div className="results">
                        <FriendSearch/>
                        <SearchResult/>
                    </div>
                </div>
            </MedContainer>
        );
    }
}

export default QuickGame;
