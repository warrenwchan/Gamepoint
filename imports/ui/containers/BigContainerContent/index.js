import React, { Component } from 'react';
import styles from './styles.css';

class BigContainerContent extends Component {
    render() {
        return (
            <div className="bigContent">
                {this.props.children}
            </div>
        );
    }
}

export default BigContainerContent;
