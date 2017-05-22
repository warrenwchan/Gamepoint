import React, { Component } from 'react';
import styles from './styles.css';
import { createContainer } from 'meteor/react-meteor-data';

import GreenButton from './../../../components/GreenButton';
import SearchResult from './SearchResult';
import Game from './../RecentGames/Game';

class SearchPlayers extends Component {
    constructor() {
        super();
        this.state =  {
            search: '',
        };
    }

    componentDidMount() {

    }

    updateSearch(event) {
        this.setState({search: event.target.value})
    }

    addFriend(userName) {
        const userObject = Meteor.users.find({emails:[{ "address" : userName, "verified" : false } ]}).fetch()
        console.log()

        Meteor.users.update({_id: Meteor.userId()}, { $push: { 'profile.friends': {email: userName, _id: userObject[0]._id }}});
    }


    render() {

        const users = this.props.allUsers
        const showUsers = users.map((user, i) =>
            <Game
                buttonIcon={<i className="fa fa-plus" aria-hidden="true"></i>}
                key={i}
                text={user.emails[0].address}
                onClick={() => (this.addFriend(user.emails[0].address))}
            />
        )

        return (
            <div className="freindsSections">
                <div className="friendsSearch">
                    <button className="searchExit" onClick={() => this.props.onClick()}>
                        <i className="fa fa-times" aria-hidden="true"></i>
                    </button>
                    <input
                        className="searchInput"
                        type="text" placeholder="Search Friends"
                        value={this.state.search}
                        onChange={this.updateSearch.bind(this)}
                    />
                    <GreenButton
                        title="Search"
                        onClick={this.hello}
                    />
                </div>
                <div className="friendsResult">
                    <h1>Results</h1>
                    <ul id="searchResults">
                        {showUsers}
                    </ul>
                </div>
            </div>
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
}, SearchPlayers);
