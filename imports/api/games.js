import { Meteor } from 'meteor/meteor';

import { Mongo } from 'meteor/mongo';
export const Games = new Mongo.Collection('games');

if(Meteor.isServer){
  Meteor.publish('games', function (){
    return Games.find({}, { fields: { leftTeam: 1, leftScore: 1, leftWin: 1, rightTeam: 1, rightScore: 1, rightWin: 1, time: 1, owner: 1 }
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
      leftWin: gameInfo.leftWin,
      rightTeam: gameInfo.rightTeam,
      rightScore: gameInfo.rightScore,
      rightWin: gameInfo.rightWin,
      time: gameInfo.time,
      owner: this.userId
    });
  },
  'games.leftIncrement' (gameId){
    if(!this.userId){
      throw new Meteor.Error('not-authorized');
    }
    return Games.update( { _id: gameId }, { $inc: {'leftScore': 1 } } );
  },
    'games.leftDecrement' (gameId){
    if(!this.userId){
      throw new Meteor.Error('not-authorized');
    }
    return Games.update( { _id: gameId }, { $inc: {'leftScore': -1 } } );
  },
    'games.rightIncrement' (gameId){
    if(!this.userId){
      throw new Meteor.Error('not-authorized');
    }
    return Games.update( { _id: gameId }, { $inc: {'rightScore': 1 } } );
  },
    'games.rightDecrement' (gameId){
    if(!this.userId){
      throw new Meteor.Error('not-authorized');
    }
    return Games.update( { _id: gameId }, { $inc: {'rightScore': -1 } } );
  },
    'games.leftWin' (gameId){
      if(!this.userId){
        throw new Meteor.Error('not-authorized');
      }
      return Games.update({_id: gameId}, {$set: { leftWin: true, rightWin: false }})
    },
    'games.rightWin' (gameId){
      if(!this.userId){
        throw new Meteor.Error('not-authorized');
      }
      return Games.update({_id: gameId}, {$set: { rightWin: true, leftWin: false }})
    },
});
// Meteor.users.update({_id: Meteor.userId()}, { $inc: {'profile.stats.win': 1 } } )
