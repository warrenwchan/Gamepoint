import React,{ Component } from 'react';
import styles from './styles.css'

export default class MedContainer extends Component {



  render() {
    return (
      <div className="medContainer">
          <div className="medContainerBanner">
            <div className="medTitle"><h1>Title</h1></div>
            <div className="medSubTitle"><h2>Sub Title</h2></div>
          </div>
      </div>
    );
  }
}
