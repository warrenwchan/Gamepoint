import React, { Component } from 'react';
import styles from './styles.css';

// const ProgressBar = require('progressbar.js');
// var bar = new ProgressBar.Circle('#container', {easing: 'easeInOut'});
// bar.animate(1);  // Value from 0.0 to 1.0

// var wins = 10
// var losses = 4
// var percent = wins/(wins+losses);

// bar.animate(percent);  // Number from 0.0 to 1.0

class Stats extends Component {
    render() {
        return (
            <div className="stats">
                <h1>{this.props.title}</h1>
                <div>
                    <div>
                        <h3>10</h3>
                        <p>Wins</p>
                    </div>
                    <div>
                        <h3>4</h3>
                        <p>Losses</p>
                    </div>
                    <div id="container"></div>
                </div>
            </div>
        );
    };
};

export default Stats;
