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
    }

    // buttonToggle (active) {
    //     const bool = !!bool;
    //     this.setState({
    //         active: bool
    //     });
    //     console.log(this.state.active)
    // }

    toggleFriends () {
        if (this.state.active === true) {
            return <AddFriends title="Friends" />;
        }
        return <SearchFriends />;
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
                        <AddPlayers title="freinds" onClick={this.buttonClicked}/>
                    </div>
                </div>
            </BigContainer>
        );
    };
};

export default Profile;
