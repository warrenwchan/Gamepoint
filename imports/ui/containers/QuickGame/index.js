import React, { Component } from 'react';
import styles from './styles.css';
import BigContainerContent from './../../containers/BigContainerContent';
import AddPlayer from './AddPlayer';
import FriendSearch from './FriendSearch';
import SearchResult from './SearchResult';
import MedContainer from './../../components/MediumContainer';
import GreenButton from './../../components/GreenButton';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom'

class QuickGame extends Component {
    // constructor(

    // )
    hello(){
        console.log('hi');
    }
    render() {
        return (
            <MedContainer title="Quick Game" subtitle="Add Players">
                <div className="quickGame">
                    <div className='leftSide'>
                        <AddPlayer/>
                    </div>
                    <div className="rightSide">
                        <FriendSearch/>
                        <SearchResult/>
                    </div>
                    <Link to="/quickgame/:id/scoreboard"><GreenButton onClick={this.hello} title='done'/></Link>
                </div>
            </MedContainer>
        );
    }
}

export default QuickGame;
