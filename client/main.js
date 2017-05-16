import { Meteor } from 'meteor/meteor';
import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';

import App from './../imports/ui/containers/App';
import styles from './main.css';

Meteor.startup(() => {
  Meteor.autorun(() => {
    ReactDOM.render(<App />, document.getElementById('app'));
  });
});
//HOW TO ADD FRIENDS TO YO FRIEND LIST
Meteor.users.update({_id:"3s2hFqCkoQT2S7WSc"}, { $push: { 'profile.friends': "kashdkjahdka12j3"}});
