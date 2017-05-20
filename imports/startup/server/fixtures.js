import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

import { Games } from './../../api/games';

Meteor.startup(() => {
  let userId = '';
  if(!Meteor.users.find().count()){
    userId = Accounts.createUser({
      email:'john@john.com',
      password:'john',
      profile:{
        friends: [],
        stats:{
          win: 4,
          loss:3
        },
        games:[]
      }
    });
  }
  if(Games.find().count() === 0 ){
    Games.insert({
      leftTeam: ['John'],
      leftScore: 16,
      rightTeam: ['Warren'],
      rightScore: 21,
      owner: this.userId
    });
  }
});
