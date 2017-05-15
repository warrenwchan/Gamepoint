import React, { Component } from 'react';
import styles from './styles.css';

import CategoryButton from './../../../components/CategoryButton'

class DashDrawer extends Component {
    render() {
        return (
            <div className="dashDrawer">
                <div className="heading">
                    <h1>dashboard</h1>
                </div>
                <div className="dashContent">
                    <CategoryButton title="quickgame" />
                    <CategoryButton title="profile" />
                    <CategoryButton title="leagues" />
                    <CategoryButton title="logout" />
                </div>
            </div>
        );
    }
}

export default DashDrawer;
