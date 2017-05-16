import React, { Component } from 'react';
import styles from './styles.css'

export default class GreenButton extends Component {
  render() {
    return (
      <div>
          <button className="greenButton"> {this.props.title} </button>
      </div>
    );
  }
}
