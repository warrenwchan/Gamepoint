import React, { Component } from 'react';
import styles from './styles.css'

export default class GreenButton extends Component {
  render() {
    const allUsers = this.props.allUsers;

    return (
      <button className="greenButton" type="button" onClick={()=> this.props.onClick()}>
        {this.props.title}
      </button>
    );
  }
}
