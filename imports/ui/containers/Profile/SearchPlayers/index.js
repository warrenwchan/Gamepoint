import React, { Component } from 'react';
import styles from './styles.css';

import GreenButton from './../../../components/GreenButton';

class SearchPlayers extends Component {
    constructor() {
        super();
        this.state =  {
            search: '',
        };
    }

    updateSearch(event) {
        this.setState({search: event.target.value})
    }

    // addFriend(userName) {
    //     Meteor.users.update({_id: userId()}, { $push: { 'profile.friends': "userName"}});
    // }

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
                        className="searchButton"
                        title="Search"
                    />
                </div>
                <div className="friendsResult">
                    <h1>Results</h1>
                    <ul id="searchResults">
                        <li>{this.state.search}
                            <button className="searchResult">
                                <i class="fa fa-plus" aria-hidden="true"></i>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default SearchPlayers;
