import { createContainer } from 'meteor/react-meteor-data';
import React, {
    Component
} from 'react';
import styles from './styles.css';
import BigContainerContent from './../../containers/BigContainerContent';
import AddPlayers from './AddPlayer';
// import FriendSearch from './FriendSearch';
// import SearchResult from './SearchResult';
import MedContainer from './../../components/MediumContainer';
import GreenButton from './../../components/GreenButton';
import Gandalf from 'gandalf-validator';
import TextField from 'material-ui/TextField';
import {Meteor} from 'meteor/meteor';

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
        // console.log('this.state.fields beginning:', this.state.fields)
        console.log('this.state', this.state);
        console.log('friendId', friendObject._id);
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
        console.log('state after', this.state)
        // Meter.call('games.addLeftId', game, leftNameId);
        // console.log('this.state.fields', this.state.fields)
        // console.log('this.props add friend', this.props);
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
        // const data = this.getCleanFormData();
        // console.log('friendObject', friendObject);
        // console.log('friendObject HandleSubmit', friendObject);
        const data = this.getFormData();
        console.log('data', data);
        // console.log('data', data);

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
            leftTeamIds:[this.state.leftNameId],
            leftWin: false,
            rightTeam: [data.rightName],
            rightScore: 0,
            rightWin: false,
            rightTeamIds: [this.state.rightNameId],
            time: recordedTime
        };
        // console.log(this.props);
        Meteor.call('games.addGame', game, (err, id) => {
            const redirectFn = this.props.history.push;
            redirectFn(`/quickgame/${id}/scoreboard`);
        });
    }
    render() {
        const { fields } = this.state;
        const friends = this.props.currentUser.profile.friends;
        // console.log('this.props', this.props.allUsers);
        // const allUsers = this.props.allUsers;

        // const leftUserObject = this.props.allUsers.filter((user) => {
        //     console.log(user.emails[0].address );
        //     if(user.emails[0].address == 'new@new.com'){
        //         return user._id;
        //     }
        // });
        // console.log('leftUserId', leftUserObject);
        console.log('currentState', this.state)
        return (
            <MedContainer title = "Quick Game" subtitle = "Add Players" >
                <div className = "quickGame" >
                    <div className = 'leftSide' >
                        {fields.leftName.element}
                        {fields.rightName.element}
                    </div>
                    <div className = "rightSide section" >
                        <AddPlayers
                            title = 'Friends'
                            friends={friends}
                            friendClick={(friend) => {this.addFriendToGame(friend)}}
                        />
                    </div>
                    <GreenButton onClick = {() => this.handleSubmit()} title = 'done' />
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
