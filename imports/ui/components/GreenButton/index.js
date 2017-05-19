import React, { Component } from 'react';
import styles from './styles.css'

export default class GreenButton extends Component {
  render() {
    return (
      <button onClick={() => this.props.onClick()} className="greenButton"> {this.props.title} </button>
    );
  }
}
