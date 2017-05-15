import React, { Component } from 'react';
import styles from './styles.css';

import BigContainer from '../../components/BigContainer';
import RecentGames from './RecentGames';
import Stats from './Stats';
import AddPlayers from './AddPlayers';


const Profile = () => (
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
                <AddPlayers
                    title="Add Players"
                />
            </div>
        </div>
    </BigContainer>
);

export default Profile;
