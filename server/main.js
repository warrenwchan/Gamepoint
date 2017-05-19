<<<<<<< HEAD
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
          win: 4,
          loss:3
        },
        games:[

        ]
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

Meteor.methods({

});

Meteor.publish('profiles', () => {
  return Meteor.users.find({}, { fields: { 'emails': 1, 'profile.friends': 1, 'profile.stats': 1, 'profile.games': 1 }});
});

// game: {
//   preset:{},
//   yourScore:'',
//   theirScore: ''
=======
import '../imports/startup/server';

// import { Meteor } from 'meteor/meteor';
// import { Accounts } from 'meteor/accounts-base';

// import { Mongo } from 'meteor/mongo';
// export const Games = new Mongo.Collection('games');

// const userCanUpdateToDo = (userId, todoOwnerId) => (
//   userId && userId === todoOwnerId
// );

// if(Meteor.isServer){
//   Meteor.publish('games', function (){
//     return Games.find({}, { fields: { leftTeam: 1, leftScore: 1, rightTeam: 1, rightScore: 1 }
//     });
//   });
>>>>>>> aefadc354994c21dd40999b38569f213375ab512
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

// Meteor.users.allow({
//   insert(userId, doc){
//     return true;
//   },
//   update(userId, doc, fieldNames, modifer){
//     return true;
//     if(modifier){
//     }
//   }
// });

// Meteor.methods({

// });

// Meteor.publish('profiles', () => {
//   return Meteor.users.find({}, { fields: { 'emails': 1, 'profile.friends': 1, 'profile.stats': 1, 'profile.games': 1 }});
// });

// // Meteor.publish('games', () => {
// //   return Meteor.users.find({})
// // })

// // game: {
// //   preset:{},
// //   yourScore:'',
// //   theirScore: ''
// // }
