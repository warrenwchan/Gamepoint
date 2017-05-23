import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import styles from './styles.css';
import BigContainerContent from './../../containers/BigContainerContent';
import AddPlayer from './AddPlayer';
// import FriendSearch from './FriendSearch';
// import SearchResult from './SearchResult';
import MedContainer from './../../components/MediumContainer';
import GreenButton from './../../components/GreenButton';
import Gandalf from 'gandalf-validator';
import TextField from 'material-ui/TextField';
import AddPlayers from './AddPlayer';

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
        this.state={
            ...this.state,
            leftName1Id:'',
            leftName2Id:'',
            rightName1Id:'',
            rightName2Id:'',
        }
    }
    addFriendToGame(friendObject){
        // console.log('this.state.fields beginning:', this.state.fields)
        console.log('this.state', this.state);
        console.log('friendId', friendObject._id);
        if(this.state.fields.leftName1.value.length === 0){
            this.setState({
                ...this.state,
                leftName1Id: friendObject._id
            })
            this.setState((prevState) => {
                return this.pathToSetState(prevState, friendObject.email, 'leftName1')
            });
        }else if(this.state.fields.leftName2.value.length === 0){
            this.setState({
                ...this.state,
                leftName2Id: friendObject._id
            })
            this.setState((prevState) => {
                return this.pathToSetState(prevState, friendObject.email, 'leftName2')
            })
        }else if(this.state.fields.rightName1.value.length === 0){
            this.setState({
                ...this.state,
                rightName1Id: friendObject._id
            })
            this.setState((prevState) => {
                return this.pathToSetState(prevState, friendObject.email, 'rightName1')
            })
        }else if(this.state.fields.rightName2.value.length === 0){
            this.setState({
                ...this.state,
                rightName2Id: friendObject._id
            })
            this.setState((prevState) => {
                return this.pathToSetState(prevState, friendObject.email, 'rightName2')
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

    handleSubmit() {
        // const data = this.getCleanFormData();
        const data = this.getFormData();

        // If form is invalid, all error messages will show automatically
        // So you can simply exit the function
        if (!data) return;
        const date = new Date();
        var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour12: true };
        const currentDate = date.toLocaleDateString('en-US', options);
        const currentTime = date.toLocaleTimeString('en-US');
        const recordedTime = `${currentDate} ${currentTime}`;
        const game = {
            leftTeam: [data.leftName1, data.leftName2],
            leftTeamIds:[this.state.leftName1Id, this.state.leftName2Id],
            leftScore: 0,
            leftWin: false,
            rightTeam: [data.rightName1, data.rightName2],
            rightTeamIds:[this.state.rightName1Id, this.state.rightName2Id],
            rightScore: 0,
            rightWin:false,
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
            <MedContainer title="Quick Game" subtitle="Add Players">
                <div className="quickGame">
                    <div className='leftSide'>
                        { fields.leftName1.element }
                        { fields.leftName2.element }
                        { fields.rightName1.element }
                        { fields.rightName2.element }
                        <GreenButton className="doneButton" onClick={() => this.handleSubmit()} title='Start Game'/>
                    </div>
                    <div className="rightSide">
                        <AddPlayers
                            title='Friends'
                            friends={friends}
                            friendClick={(friend) => {this.addFriendToGame(friend)}}
                        />
                    </div>

                </div>
            </MedContainer>
        );
    }
}

// <Link to="/quickgame/:id/scoreboard"><GreenButton onClick={this.hello} title='done'/></Link>

export default createContainer(() => {
  Meteor.subscribe('profiles');

  return {
    allUsers: Meteor.users.find({}, { fields: { 'emails': 1 } }).fetch(),
    currentUser: Meteor.user(),
    currentUserId: Meteor.userId(),
  };
}, QuickGame);
