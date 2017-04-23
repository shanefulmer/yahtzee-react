import React from 'react';
import Die from './Die';

export default function RollingDice(props) {
  const dice = props.dice.map((x, i) => {
    let die = <Die index={i} value={x} selected={props.selected} />;
    if (x === 0) die = <svg></svg>;
    return (
      <div key={i} className='column is-one-quarter'>
        {die}
      </div>
    )
  });

  return (
    <div className='rollingDice'>
      <div className='columns'>
        <div className='column is-one-quarter'></div>
        {dice.slice(0, 2)}
        <div className='column is-one-quarter'></div>
      </div>
      <div className='columns'>
        <div className='column'></div>
        {dice.slice(2)}
        <div className='column'></div>
      </div>
    </div>
  );
}
