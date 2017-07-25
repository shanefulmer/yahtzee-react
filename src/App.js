import React, { Component } from 'react';
import './App.css';
import HeldDice from './components/HeldDice';
import RollingDice from './components/RollingDice';
import ScoreCard from './components/ScoreCard';
import Yahtzee from './gameLogic/Yahtzee';
import GameState from './GameState';
import Rules from './Rules';
import _ from 'lodash';
import { rollDie } from './gameLogic/helpers';
import logo from './logo.png';
import shaker from './shaker.png';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rolledDice: [6, 6, 6, 6, 6],
      heldDice: [0, 0, 0, 0, 0],
      scores: [
        {label: 'Ones', score: 0, filled: false},
        {label: 'Twos', score: 0, filled: false},
        {label: 'Threes', score: 0, filled: false},
        {label: 'Fours', score: 0, filled: false},
        {label: 'Fives', score: 0, filled: false},
        {label: 'Sixes', score: 0, filled: false},
        {label: '3 of a Kind', score: 0, filled: false},
        {label: '4 of a Kind', score: 0, filled: false},
        {label: 'Full House', score: 0, filled: false},
        {label: 'Sm Straight', score: 0, filled: false},
        {label: 'Lg Straight', score: 0, filled: false},
        {label: 'Yahtzee', score: 0, filled: false},
        {label: 'Chance', score: 0, filled: false}
      ],
      rollsLeft: 3,
      gameState: GameState.GameOver
    }
    this.handleRollClick = this.handleRollClick.bind(this);
    this.updateDice = this.updateDice.bind(this);
    this.holdDie = this.holdDie.bind(this);
    this.unholdDie = this.unholdDie.bind(this);
    this.endTurn = this.endTurn.bind(this);
    this.getAll = this.getAll.bind(this);
  }

  componentDidMount() {
    this.startTimer();
  }

  startTimer() {
    this.timer = setInterval(
      () => this.updateDice(),
      750
    );
  }

  render() {
    return (
      <div className="App is-fullwidth">
        <img className='shaker' src={shaker} />
        <img className='logo' src={logo} />
        <div className='columns mainArea'>
          <div className='column is-three-quarters'>
            <div className='playContainerOuter'>
              <div className='playContainer'>
                <RollingDice dice={this.state.rolledDice} selected={this.holdDie} />
                <div className='columns bottom-section'>
                  <div className='column is-three-quarters'>
                    <HeldDice dice={this.state.heldDice} selected={this.unholdDie}/>
                    <div className={`rollCount ${this.state.gameState === GameState.GameOver ? 'hide' : ''}`}><p>{this.state.rollsLeft} Rolls Remaining</p></div>
                  </div>
                  <div className='column'>
                    <a className='rollButton' onClick={this.handleRollClick}>
                      <i className="fa fa-refresh" aria-hidden="true"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='column'>
            <ScoreCard dice={this.getAll()} scores={this.state.scores} 
              gameState={this.state.gameState} assignScore={this.endTurn} />
          </div>
        </div>
        <p className='tagLine'> Made with <i className='fa fa-heart'></i> by <a href='http://shanefulmer.com'>Shane Fulmer</a> using <a href='https://facebook.github.io/react'>ReactJS</a></p>

        <br />
        <br />
        <Rules />
      </div>
    );
  }

  startGame() {
    clearInterval(this.timer);
    this.setState({
      gameState: GameState.InTurn, 
      rollsLeft: 2, 
      scores: this.state.scores.map(x => _.extend(x, {score:0, filled: false})),
      rolledDice: this.rollDice()
    });
  }

  handleRollClick() {
    if (this.state.gameState === GameState.GameOver) {
      this.startGame();
    }
    else if (this.state.gameState !== GameState.TurnCompleted) {
      this.updateDice();
    }
  }

  endTurn(category) {
    if (this.state.scores.find(x => x.label === category).filled) return;

    const score = Yahtzee.calculateScore(this.getAll(), category);
    const match = this.state.scores.filter(x => x.label === category)[0];
    match.filled = true;
    match.score = score;

    const newState = this.gameOver() ? GameState.GameOver : GameState.AssignedScore;
    if (newState === GameState.GameOver) this.startTimer();

    this.setState({scores: this.state.scores, 
      gameState: newState,
      rollsLeft: 3,
      heldDice: new Array(5).fill(0),
      rolledDice: new Array(5).fill(6)
    });
  }

  updateDice() {
    this.setState({ 
      rolledDice: this.rollDice(), 
      rollsLeft: this.state.rollsLeft-1,
      gameState: this.getGameStateAfterRoll()
    });
  }

  rollDice() {
    return this.state.rolledDice.map(x => {
      if (x === 0) return 0;
      return rollDie();
    });
  }

  getGameStateAfterRoll() {
    if (this.state.rollsLeft === 1 && this.state.gameState === GameState.InTurn) return GameState.TurnCompleted;
    if (this.state.gameState === GameState.AssignedScore) return GameState.InTurn;
    return this.state.gameState;
  }

  holdDie(dieIndex) {
    var result = this.moveDie(this.state.rolledDice, this.state.heldDice, dieIndex);
    this.setState({rolledDice: result.source, heldDice: result.dest})
  }

  unholdDie(dieIndex) {
    var result = this.moveDie(this.state.heldDice, this.state.rolledDice, dieIndex);
    this.setState({rolledDice: result.dest, heldDice: result.source})
  }

  moveDie(source, dest, dieIndex) {
    if (!this.canClickDice()) return;
    const removedValue = source[dieIndex];
    source[dieIndex] = 0;

    const firstOpenSlot = dest.indexOf(0);
    dest[firstOpenSlot] = removedValue;
    return { source, dest };
  }

  canClickDice() {
    return this.state.gameState === GameState.InTurn || this.state.gameState === GameState.TurnCompleted;
  }

  getAll() {
    return this.state.heldDice.concat(this.state.rolledDice).filter(x => x > 0);
  }

  gameOver() {
    return this.state.scores.every(x => x.filled);
  }
}

export default App;
