import React, { Component } from 'react';
import { Meteor} from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import styles from './styles.css';

import BigContainerContent from './../../containers/BigContainerContent';
import AddPlayers from './AddPlayer';
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
        const fields = [{
                name: 'leftName',
                component: TextField,
                validators: ['required'],
                errorPropName: 'errorText',
                props: {
                    hintText: 'Team 1',
                },
                debounce: 300,
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
        this.state={
            ...this.state,
            leftNameId:'',
            rightNameId:''
        }
    }
    addFriendToGame(friendObject){
        if(this.state.fields.leftName.value.length === 0){
            this.setState({
                ...this.state,
                leftNameId: friendObject._id
            })
            this.setState((prevState) => {
                return this.pathToSetState(prevState, friendObject.email, 'leftName')
            });
        }else if(this.state.fields.rightName.value.length === 0){
            this.setState({
                ...this.state,
                rightNameId: friendObject._id
            })
            this.setState((prevState) => {
                return this.pathToSetState(prevState, friendObject.email, 'rightName')
            })
        }
    }
    pathToSetState(prevState, email, team){
        return {
                    fields: {
                        ...prevState.fields,
                        [team]: {
                            ...prevState.fields[team],
                            value: email,
                            element: {
                                ...prevState.fields[team].element,
                                props: {
                                    ...prevState.fields[team].element.props,
                                    value: email,
                                }

                            }
                        }
                    }
                }
    }
    handleSubmit(friendObject) {
        const data = this.getFormData();

        if (!data) return;
        const date = new Date();
        var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour12: true };
        const currentDate = date.toLocaleDateString('en-US', options);
        const currentTime = date.toLocaleTimeString('en-US');
        const recordedTime = `${currentDate} ${currentTime}`;
        const game = {
            leftTeam: [data.leftName],
            leftScore: 0,
            leftTeamIds:[this.state.leftNameId],
            leftWin: false,
            rightTeam: [data.rightName],
            rightScore: 0,
            rightWin: false,
            rightTeamIds: [this.state.rightNameId],
            time: recordedTime
        };
        Meteor.call('games.addGame', game, (err, id) => {
            const redirectFn = this.props.history.push;
            redirectFn(`/quickgame/${id}/scoreboard`);
        });
    }
    render() {
        const { fields } = this.state;
        const friends = this.props.currentUser.profile.friends;

        return (
            <MedContainer title = "Quick Game" subtitle = "Add Players" >
                <div className = "quickGame" >
                    <div className = 'leftSide' >
                        {fields.leftName.element}
                        {fields.rightName.element}
                        <GreenButton onClick = {() => this.handleSubmit()} title = 'Start Game' />
                    </div>
                    <div className = "rightSide section" >
                        <AddPlayers
                            title = 'Friends'
                            friends={friends}
                            friendClick={(friend) => {this.addFriendToGame(friend)}}
                        />
                    </div>
                </div>
            </MedContainer>
        );
    }
}

export default createContainer(() => {
  Meteor.subscribe('profiles');
  return {
    allUsers: Meteor.users.find({}, { fields: { 'emails': 1 } }).fetch(),
    currentUser: Meteor.user(),
    currentUserId: Meteor.userId(),
  };
}, QuickGame);
