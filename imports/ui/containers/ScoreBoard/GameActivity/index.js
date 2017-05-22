import React from 'react';
import styles from './styles.css';

const GameActivity = ({leftScore, leftTeam, rightScore, rightTeam}) => {
  const leftTeamMembers = leftTeam.filter((person) => {
    return <p>{person}</p>
  });
  console.log(leftScore, leftTeam);

  return (
    <div className='gameActivity'>
      <div>
        <p>Game Activity</p>
      </div>
      <div>
        <p>
          {leftTeam.filter((person) => {
            return <p>{person}</p>
          })}
          {leftScore}
        </p>
      </div>
    </div>
  );
}

export default GameActivity;
