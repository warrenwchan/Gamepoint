import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

Meteor.startup(() => {
  let userId = '';
  if(!Meteor.users.find().count()){
    userId = Accounts.createUser({
      email:'john@john.com',
      password:'john',
      profile:{
        friends: [],
        stats:{
          wins: '',
          losses: '',
        games:{}
        }
      }
    });
  }
});

Meteor.users.allow({
  insert(userId, doc){
    return true;
  },
  update(userId, doc, fieldNames, modifer){
    return true;
    if(modifier){
    }
  }
});

Meteor.publish('profiles', () => {
  return Meteor.users.find({}, { fields: { 'profile.friends': 1, 'profile.stats': 1 }});
});
