import React from 'react';

export default function ScoreTotal(props) {
  return (
    <div className='level totalLevel'>
      <div className='level-left'>
        <div className='totalLabel'>Total</div>
      </div>
      <div className='level-right'>
        <div className='total'>
          {props.total}
        </div>
      </div>
    </div>
  )
}

ScoreTotal.propTypes = {
  total: React.PropTypes.number.isRequired
}
