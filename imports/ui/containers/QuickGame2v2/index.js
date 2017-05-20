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
                name: 'leftName1',
                component: TextField,
                validators: ['required'],
                errorPropName: 'errorText',
                props: {
                hintText: 'Team 1',
                },
                debounce: 500,
            },
            {
                name: 'leftName2',
                component: TextField,
                validators: ['required'],
                errorPropName: 'errorText',
                props: {
                hintText: 'Team 1',
                },
                debounce: 500,
            },
            {
                name: 'rightName1',
                component: TextField,
                validators: ['required'],
                errorPropName: 'errorText',
                props: {
                hintText: 'Team 2',
                },
                debounce: 300,
            },
            {
                name: 'rightName2',
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

        const game = {
            leftTeam: [data.leftName1, data.leftName2],
            leftScore: 0,
            rightTeam: [data.rightName1, data.rightName2],
            rightScore: 0
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
                        { fields.leftName1.element }
                        { fields.leftName2.element }
                        { fields.rightName1.element }
                        { fields.rightName2.element }
                        <AddPlayer/>
                    </div>
                    <div className="rightSide">
                        <FriendSearch/>
                        <SearchResult/>
                    </div>
                    <GreenButton onClick={() => this.handleSubmit()} title='done'/>
                </div>
            </MedContainer>
        );
    }
}

// <Link to="/quickgame/:id/scoreboard"><GreenButton onClick={this.hello} title='done'/></Link>

export default QuickGame;
