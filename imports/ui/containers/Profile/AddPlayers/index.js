import React, { Component } from 'react';
import styles from './styles.css';

import AddPlayerButton from './../../../components/AddPlayersButton'

class AddPlayers extends Component {


    render() {
        return (
            <div className="addPlayers">
                <div className="sectionTitle">
                    <h1>{this.props.title}</h1>
                </div>
                <ul>
                    <li>Player 1</li>
                    <li>Player 2</li>
                    <li>Player 3</li>
                </ul>
                <button onClick={()=> this.props.onClick()} className="addPlayersButton">+ Add Players</button>
            </div>
        );
    };
<<<<<<< HEAD
=======
=======
            <ul>
                <li>Player 1</li>
                <li>Player 2</li>
                <li>Player 3</li>
            </ul>
            <AddPlayerButton onClick={handleClick} />
        </div>
    );
>>>>>>> 4bc2aceaeb05443a50fbd02ddfe888e2475d24d6
>>>>>>> e88083fcf6a9434aaa2c1cb9ce1fd8b8f9ed7b3a
};

export default AddPlayers;
