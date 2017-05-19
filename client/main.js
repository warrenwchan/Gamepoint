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


// //HOW TO ADD FRIENDS TO YO FRIEND LIST
// Meteor.users.update({_id: Meteor.userId() }, { $push: { 'profile.friends': "kashdkjahdka12j3"}});
// // HOW tO INCREASE WIN BY 1
// Meteor.users.update({_id: Meteor.userId()}, { $inc: {'profile.stats.win': 1 } } )
// //HOW TO INCREASE LOSS BY 1
// Meteor.users.update({_id: Meteor.userId()}, { $inc: {'profile.stats.loss': 1 } } )
// Meteor.games.insert({
//   leftTeam: [],
//   rightTeam: [],
//   leftScore: 0,
//   rightScore: 0,
//   owner: ''
// });

//  Meteor.publish('games', function gamesPublication(){
//     return Games.find({ owner: this.userId });
//   });

// let currentUserId = Meteor.userId()
