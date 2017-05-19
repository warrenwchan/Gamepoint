import React, { Component } from 'react';
import styles from './styles.css';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom'

import CategoryButton from './../../../components/CategoryButton'

class Menu extends Component {
    render() {
        return (
            <div className="menu">
                <div className="heading">
                    {/*<img src="./../../../../../public/assets/Asset 1.png" alt="logo"/>*/}
                    <h1>menu</h1>
                </div>
                <Route>
                    <div className="menuContent">
                        <Link to="/quickgame/presets"><CategoryButton title="quickgame" /></Link>
                        <Link to="/profile"><CategoryButton title="profile" /></Link>
                        <Link to="/leagues"><CategoryButton title="leagues" /></Link>
                        <Link to="/logout"><CategoryButton title="logout" /></Link>
                    </div>
                </Route>
            </div>
        );
    }
}

export default Menu;
