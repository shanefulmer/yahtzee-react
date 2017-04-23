import {Enum} from 'enumify';

export default class GameState extends Enum {}
GameState.initEnum(['GameOver', 'InTurn', 'TurnCompleted', 'AssignedScore']);
