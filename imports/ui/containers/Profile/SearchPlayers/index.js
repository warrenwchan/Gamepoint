import React, { Component } from 'react';
import styles from './styles.css';

import GreenButton from './../../../components/GreenButton';

class SearchPlayers extends Component {
    // state = {  }
    render() {
        return (
            <div>
                <div>
                    <button>x</button>
                    <input type="text"/>
                    <GreenButton title="Search"/>
                </div>
                <div>
                    <h1>Results</h1>
                    <p>player 1</p>
                </div>
            </div>
        );
    }
}

export default SearchPlayers;
