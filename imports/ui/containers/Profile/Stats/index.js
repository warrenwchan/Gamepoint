import React, { Component } from 'react';
import styles from './styles.css';
import PropTypes from 'prop-types';


class Stats extends Component {

    showWins (wins) {
        if (this.props.wins) {
            return <h3>{wins}</h3>;
        }
        return <h3>0</h3>
    }

    showLoss (losses) {
        if (this.props.losses) {
            return <h3>{losses}</h3>;
        }
        return <h3>0</h3>
    }

    showPercent ( wins, losses, percent) {
        if ( wins.length ) {
            return wins
        }

        if ( wins !== 0 ) {
            return percent;
        }
         return "0";
    }

    render() {

        const wins = this.props.wins;
        const losses = this.props.losses;
        const percent = Math.round(wins/(wins + losses)*100) + "%";

        return (
            <div className="stats">
                <h1>{this.props.title}</h1>
                <div className="statContain">
                    <div className="stat win">
                        {this.showWins(wins)}
                        <p>wins</p>
                    </div>
                    <div className="stat loss">
                        {this.showLoss(losses)}
                        <p>losses</p>
                    </div>
                </div>
                <h1>{this.showPercent(wins, losses, percent)}</h1>
                <div id="container"></div>
            </div>
        );
    };
};

Stats.PropTypes = {
    wins: PropTypes.string,
    losses: PropTypes.string,
    title: PropTypes.string.isRequired
}

export default Stats;
