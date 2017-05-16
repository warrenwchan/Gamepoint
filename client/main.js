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
