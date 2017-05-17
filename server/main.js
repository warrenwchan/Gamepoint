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
<<<<<<< HEAD
          win: 4,
          loss:3
        },
        games:[]
=======
          wins: '10',
          losses: '4',
        },
        games:{}
>>>>>>> warren
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
  return Meteor.users.find({}, { fields: { 'profile.friends': 1, 'profile.stats': 1, 'profile.games': 1 }});
});

// game: {
//   preset:{},
//   yourScore:'',
//   theirScore: ''
// }
