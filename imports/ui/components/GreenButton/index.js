import React, { Component } from 'react';
import styles from './styles.css'

export default class GreenButton extends Component {
  render() {
    return (
<<<<<<< HEAD
      <button className="greenButton" type="button" onClick={()=> this.props.onClick()}>
        {this.props.title}
      </button>
=======
      <button onClick={() => this.props.onClick()} className="greenButton"> {this.props.title} </button>
>>>>>>> aefadc354994c21dd40999b38569f213375ab512
    );
  }
}
