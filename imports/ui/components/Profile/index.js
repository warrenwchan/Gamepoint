import React, { Component } from 'react';
import styles from './styles.css';

import RecentGames from './RecentGames';
import Stats from './Stats';
import AddPlayers from './AddPlayers';

const Profile = () => (
    <div className="profileContainer">
        <div className="section recentGamesSection">
            <RecentGames
                title="Recent Games"
            />
        </div>
        <div className="section statsSection">
            <Stats
                title="player 1"
            />
        </div>
        <div className="section addFriendsSection">
            <AddPlayers
                title="Add Players"
             />
        </div>
    </div>
);

export default Profile;
