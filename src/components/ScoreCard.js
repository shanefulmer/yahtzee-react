import React from 'react';
import ScoreCardRow from './ScoreCardRow';
import ScoreTotal from './ScoreTotal';
import Yahtzee from '../gameLogic/Yahtzee';
import GameState from '../GameState';

export default function ScoreCard(props) {
  const rows = props.scores.map(x => {
    const possibleScore = Yahtzee.calculateScore(props.dice, x.label);
    const canAssign = props.gameState === GameState.TurnCompleted && !x.filled;

    return <ScoreCardRow key={x.label} possibleScore={possibleScore} assignScore={props.assignScore} 
      canAssign={canAssign} score={x.score} label={x.label} />
  });

  const total = props.scores.map(x => x.score).reduce((a, b) => a + b);
  const upper = props.scores.slice(0, 6).map(x => x.score).reduce((a, b) => a + b);
  const lower = props.scores.slice(6).map(x => x.score).reduce((a, b) => a + b);
  const bonus = upper >= 63 ? 35 : 0;

  return (
    <div className='cardContainer'>
      <div className='cardInnerContainer'>
        <h2 className='cardTitle'>ScoreCard</h2>
        <table className='table scorecard'>
          <tbody>
            {rows.slice(0, 6)}
            <tr><td className='bonusCell'>Bonus</td><td className='scoreCell'>{bonus}</td></tr>
            <tr className='cardSection'><td className='sectionCell'>Upper Section:</td><td>{upper + bonus}</td></tr>
            {rows.slice(6)}
            <tr className='cardSection'><td className='sectionCell'>Lower Section:</td><td>{lower}</td></tr>
          </tbody>
        </table>
      </div>
      <ScoreTotal total={total} />
    </div>
  )
}

ScoreCard.propTypes = {
  dice: React.PropTypes.array.isRequired,
  scores: React.PropTypes.array.isRequired,
  gameState: React.PropTypes.object.isRequired,
  assignScore: React.PropTypes.func.isRequired
}
