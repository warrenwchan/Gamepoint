import React, { Component } from 'react';
import styles from './styles.css';

import BigContainer from '../../components/BigContainer';
import RecentGames from './RecentGames';
import Stats from './Stats';
import AddPlayers from './AddPlayers';
import SearchPlayers from './SearchPlayers';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: true,
         };
         this.toggleFriends = this.toggleFriends.bind(this);
    }

    buttonToggle () {
        this.setState({
            active: !this.state.active
        });
        console.log(this.state.active)
    }

    toggleFriends () {
        if (this.state.active) {
            return <AddPlayers title="friends" onClick={this.buttonToggle.bind(this)}/>;
        }
        return <SearchPlayers />;
    }

    hello() {
        console.log(AddPlayers.value)
    };

    render() {
        return (
            <BigContainer title="Profile">
                <div className="profileContainer">
                    <div className="section leftSection">
                        <RecentGames
                            title="Recent Games"
                        />
                    </div>
                    <div className="section statsSection">
                        <Stats
                            title="player 1"
                        />
                    </div>
                    <div className="section rightSection">
                        {this.toggleFriends()}
                    </div>
                </div>
            </BigContainer>
        );
    };
};

export default Profile;
