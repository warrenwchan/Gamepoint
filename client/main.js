import { Meteor } from 'meteor/meteor';
import React from 'react';
import { render } from 'react-dom';

import App from './../imports/ui/containers/App';
import styles from './main.css';

Meteor.startup(() => {
  render(<App />, document.getElementById('app'));
});
