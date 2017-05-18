import React, { Component } from 'react';
import styles from './styles.css';

import GreenButton from './../../../components/GreenButton';

class SearchPlayers extends Component {
    // state = {  }
    render() {
        return (
            <div className="freindsSections">
                <div className="friendsSearch">
                    <button className="searchExit" onClick={() => this.props.onClick()}>
                        <i className="fa fa-times" aria-hidden="true"></i>
                    </button>
                    <input type="text"/>
                    <GreenButton title="Search"/>
                </div>
                <div className="friendsResult">
                    <h1>Results</h1>
                    <p>player 1</p>
                </div>
            </div>
        );
    }
}

export default SearchPlayers;
