import React, { Component } from 'react';
import styles from './styles.css';

import DashDrawer from './../DashDrawer'

class DashBoard extends Component {
    render() {
        return (
            <div className="dashBoardContain">
                <DashDrawer />
                <div className="mainApp"></div>
            </div>
        );
    }
}

export default DashBoard;
