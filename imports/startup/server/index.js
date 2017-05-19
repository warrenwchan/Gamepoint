import './fixtures';
import './register-api';

// import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

// import { Mongo } from 'meteor/mongo';
// export const Games = new Mongo.Collection('games');

const userCanUpdateToDo = (userId, todoOwnerId) => (
  userId && userId === todoOwnerId
);

// if(Meteor.isServer){
//   Meteor.publish('games', function (){
//     return Games.find({}, { fields: { leftTeam: 1, leftScore: 1, rightTeam: 1, rightScore: 1 }
//     });
//   });
// }

// Meteor.startup(() => {
//   let userId = '';
//   if(!Meteor.users.find().count()){
//     userId = Accounts.createUser({
//       email:'john@john.com',
//       password:'john',
//       profile:{
//         friends: [],
//         stats:{
//           win: 4,
//           loss:3
//         },
//         games:[]
//       }
//     });
//   }
//   if(Games.find().count() === 0 ){
//     Games.insert({
//       leftTeam: ['John'],
//       leftScore: 16,
//       rightTeam: ['Warren'],
//       rightScore: 21
//     });
//   }
// });

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
  return Meteor.users.find({}, { fields: { 'emails': 1, 'profile.friends': 1, 'profile.stats': 1, 'profile.games': 1 }});
});

// Meteor.publish('games', () => {
//   return Meteor.users.find({})
// })

// game: {
//   preset:{},
//   yourScore:'',
//   theirScore: ''
// }
