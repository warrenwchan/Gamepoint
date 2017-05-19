import React, { Component } from 'react';
import styles from './styles.css'

export default class RedButton extends Component {

  render() {
    return (
      <button className="redButton" onClick={() => {this.props.onClick()}} >
        {this.props.title}
      </button>
    );
  }
}
