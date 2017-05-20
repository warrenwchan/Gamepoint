import './fixtures';
import './register-api';

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
//   return Meteor.games.find({}, )
// })

// game: {
//   preset:{},
//   yourScore:'',
//   theirScore: ''
// }
