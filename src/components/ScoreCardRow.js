import React from 'react';

export default function ScoreCardRow(props) {
  const disabledClass = props.canAssign ? '' : 'disabled';

  const scoreCell = props.canAssign ?
    <td className='scoreCell possibleScoreCell'>{props.possibleScore}</td> :
    <td className='scoreCell'>{props.score}</td>;

  return (
    <tr>
      <td className='buttonCell'>
        <a onClick={() => props.assignScore(props.label)} className={`scoreButton ${disabledClass}`}>{props.label}</a>
      </td>
      {scoreCell}
    </tr>
  );
}

ScoreCardRow.propTypes = {
  score: React.PropTypes.number.isRequired,
  possibleScore: React.PropTypes.number.isRequired,
  label: React.PropTypes.string.isRequired,
  canAssign: React.PropTypes.bool.isRequired,
  assignScore: React.PropTypes.func.isRequired
}
