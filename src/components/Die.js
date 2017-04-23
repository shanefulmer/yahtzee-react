import React from 'react';

export default function Die(props) {
  const renderers = {
    "0": <Die0 />,
    "1": <Die1 />,
    "2": <Die2 />,
    "3": <Die3 />,
    "4": <Die4 />,
    "5": <Die5 />,
    "6": <Die6 />
  }
  return (
    <svg className='die' onClick={() => props.selected(props.index)}>
      <circle cx='60' cy='60' r='60' fill='rgb(236, 236, 220)'/>
      <g fill='rgb(168, 52, 44)'>
        {renderers[props.value]}
      </g>
    </svg>
  )
}

function Die6() {
  return (
    <g>
      <circle cx='40' cy='30' r='10' />
      <circle cx='40' cy='60' r='10' />
      <circle cx='40' cy='90' r='10' />
      <circle cx='80' cy='30' r='10' />
      <circle cx='80' cy='60' r='10' />
      <circle cx='80' cy='90' r='10' />
    </g>
  )
}

function Die5() {
  return (
    <g>
      <circle cx='35' cy='35' r='10' />
      <circle cx='85' cy='35' r='10' />
      <circle cx='60' cy='60' r='10' />
      <circle cx='35' cy='85' r='10' />
      <circle cx='85' cy='85' r='10' />
    </g>
  )
}

function Die4() {
  return (
    <g>
      <circle cx='35' cy='35' r='10' />
      <circle cx='85' cy='35' r='10' />
      <circle cx='35' cy='85' r='10' />
      <circle cx='85' cy='85' r='10' />
    </g>
  )
}

function Die3() {
  return (
    <g>
      <circle cx='35' cy='35' r='10' />
      <circle cx='60' cy='60' r='10' />
      <circle cx='85' cy='85' r='10' />
    </g>
  )
}

function Die2() {
  return (
    <g>
      <circle cx='40' cy='40' r='10' />
      <circle cx='80' cy='80' r='10' />
    </g>
  )
}

function Die1() {
  return (
    <g><circle cx='60' cy='60' r='14' /></g>
  )
}

function Die0() {
  return <g />;
}

Die.propTypes = {
  value: React.PropTypes.number.isRequired,
  index: React.PropTypes.number.isRequired,
  selected: React.PropTypes.func.isRequired
}
