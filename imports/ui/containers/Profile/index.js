import React, { Component } from 'react';
import styles from './styles.css';

import BigContainer from '../../components/BigContainer';
import RecentGames from './RecentGames';
import Stats from './Stats';
import AddPlayers from './AddPlayers';
import SearchPlayers from './SearchPlayers';

class Profile extends Component {

    buttonClicked() {

    }

    // buttonClicked() {
    //     const buttonClicked = props.buttonClicked;
    //     if (buttonClicked) {
    //         return <SearchPlayers />
    //     }
    //     return <AddPlayers title="Friends" onClick={this.buttonClicked} />;
    // }

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
                        <AddPlayers title="freinds" onClick={this.buttonClicked}/>
                    </div>
                </div>
            </BigContainer>
        );
    };
};

export default Profile;
