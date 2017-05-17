import React, { Component } from 'react';
import styles from './styles.css';

import GreenButton from './../../../components/GreenButton';

class SearchPlayers extends Component {
    // state = {  }
    render() {
        return (
            <div>
                <div className="friendsSearch">
                    <button>x</button>
                    <input type="text"/>
                    <GreenButton title="Search"/>
                </div>
                <div className="freindsResult">
                    <h1>Results</h1>
                    <p>player 1</p>
                </div>
            </div>
        );
    }
}

export default SearchPlayers;
