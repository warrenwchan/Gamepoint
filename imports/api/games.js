import { Meteor } from 'meteor/meteor';

import { Mongo } from 'meteor/mongo';
export const Games = new Mongo.Collection('games');

if(Meteor.isServer){
  Meteor.publish('games', function (){
    return Games.find({}, { fields: { leftTeam: 1, leftScore: 1, rightTeam: 1, rightScore: 1, owner: 1 }
    });
  });
}

Meteor.methods({
  'games.addGame' (gameInfo){
    if (!this.userId){
      throw new Meteor.Error('not-authorized');
    }
    return Games.insert({
      leftTeam: gameInfo.leftTeam,
      leftScore: gameInfo.leftScore,
      rightTeam: gameInfo.rightTeam,
      rightScore: gameInfo.rightScore,
      owner: this.userId
    });
  },
});
