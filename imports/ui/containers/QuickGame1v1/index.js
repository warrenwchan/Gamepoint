import React, { Component } from 'react';
import styles from './styles.css';
import BigContainerContent from './../../containers/BigContainerContent';
import AddPlayer from './AddPlayer';
import FriendSearch from './FriendSearch';
import SearchResult from './SearchResult';
import MedContainer from './../../components/MediumContainer';
import GreenButton from './../../components/GreenButton';
import Gandalf from 'gandalf-validator';
import TextField from 'material-ui/TextField';
import AddPlayers from './../../containers/Profile/AddPlayers';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom'

class QuickGame extends Gandalf {
    constructor() {
        const fields = [
            {
                name: 'leftName',
                component: TextField,
                validators: ['required'],
                errorPropName: 'errorText',
                props: {
                hintText: 'Team 1',
                },
                debounce: 500,
            },
            {
                name: 'rightName',
                component: TextField,
                validators: ['required'],
                errorPropName: 'errorText',
                props: {
                hintText: 'Team 2',
                },
                debounce: 300,
            }
        ];
        super(fields);
    }


    handleSubmit() {
        const data = this.getCleanFormData();

        // If form is invalid, all error messages will show automatically
        // So you can simply exit the function
        if (!data) return;
        const date = new Date();
        var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour12: true };
        const currentDate = date.toLocaleDateString('en-US', options);
        const currentTime = date.toLocaleTimeString('en-US');
        const recordedTime = `${currentDate} ${currentTime}`;
        const game = {
            leftTeam: [data.leftName],
            leftScore: 0,
            leftWin: false,
            rightTeam: [data.rightName],
            rightScore: 0,
            rightWin: false,
            time: recordedTime
        };

        Meteor.call('games.addGame', game, (err, id) => {
            const redirectFn = this.props.history.push;
            redirectFn(`/quickgame/${id}/scoreboard`);
        });
    }
    render() {
        const { fields } = this.state;
        return (
            <MedContainer title="Quick Game" subtitle="Add Players">
                <div className="quickGame">
                    <div className='leftSide'>
                        { fields.leftName.element }
                        { fields.rightName.element }
                    </div>
                    <div className="rightSide section">
                        <AddPlayers title='Friends'/>
                    </div>
                    <GreenButton onClick={() => this.handleSubmit()} title='done'/>
                </div>
            </MedContainer>
        );
    }
}

// <Link to="/quickgame/:id/scoreboard"><GreenButton onClick={this.hello} title='done'/></Link>

export default QuickGame;
