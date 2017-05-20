import React, { Component } from 'react';
import styles from './styles.css';
import { createContainer } from 'meteor/react-meteor-data';

import GreenButton from './../../../components/GreenButton';
import SearchResult from './SearchResult';

class SearchPlayers extends Component {
    constructor() {
        super();
        this.state =  {
            search: '',
        };
    }

    componentDidMount() {
        // console.log(this.props.allUsers, "hellos")
    }

    updateSearch(event) {
        this.setState({search: event.target.value})
    }

    addFriend(userName) {
        // Meteor.users.update({_id: Meteor.userId()}, { $push: { 'profile.friends': "hello"}});
    }

    showUsers() {
        const friends = Meteor.users.find({}, { fields: { 'emails': 1 } }).fetch();
        console.log(friends[1].emails[0].address);
    }


    render() {

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
