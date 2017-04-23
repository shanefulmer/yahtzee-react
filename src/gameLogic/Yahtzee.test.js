import Yahtzee from './Yahtzee';

it('returns correctly for ones', () => {
  expect(Yahtzee.calculateScore([1,4,3,1,1], 'Ones')).toEqual(3);
  expect(Yahtzee.calculateScore([1,1,1,1,1], 'Ones')).toEqual(5);
  expect(Yahtzee.calculateScore([4,3,2,6,6], 'Ones')).toEqual(0);
});

it('returns correctly for twos', () => {
  expect(Yahtzee.calculateScore([2,4,3,2,2], 'Twos')).toEqual(6);
  expect(Yahtzee.calculateScore([2,2,2,2,2], 'Twos')).toEqual(10);
  expect(Yahtzee.calculateScore([4,3,1,6,6], 'Twos')).toEqual(0);
});

it('returns correctly for threes', () => {
  expect(Yahtzee.calculateScore([2,4,3,3,3], 'Threes')).toEqual(9);
  expect(Yahtzee.calculateScore([3,3,3,3,3], 'Threes')).toEqual(15);
  expect(Yahtzee.calculateScore([6,5,4,2,1], 'Threes')).toEqual(0);
});

it('returns correctly for fours', () => {
  expect(Yahtzee.calculateScore([1,4,4,1,1], 'Fours')).toEqual(8);
  expect(Yahtzee.calculateScore([4,4,4,4,4], 'Fours')).toEqual(20);
  expect(Yahtzee.calculateScore([1,3,2,6,6], 'Fours')).toEqual(0);
});

it('returns correctly for fives', () => {
  expect(Yahtzee.calculateScore([5,4,3,5,5], 'Fives')).toEqual(15);
  expect(Yahtzee.calculateScore([5,5,5,5,5], 'Fives')).toEqual(25);
  expect(Yahtzee.calculateScore([4,3,2,6,6], 'Fives')).toEqual(0);
});

it('returns correctly for sixes', () => {
  expect(Yahtzee.calculateScore([6,2,3,6,5], 'Sixes')).toEqual(12);
  expect(Yahtzee.calculateScore([6,6,6,6,6], 'Sixes')).toEqual(30);
  expect(Yahtzee.calculateScore([4,3,2,1,1], 'Sixes')).toEqual(0);
});

it('returns correctly for chance', () => {
  expect(Yahtzee.calculateScore([6,2,3,6,5], 'Chance')).toEqual(22);
  expect(Yahtzee.calculateScore([6,6,6,6,6], 'Chance')).toEqual(30);
  expect(Yahtzee.calculateScore([4,3,2,1,1], 'Chance')).toEqual(11);
  expect(Yahtzee.calculateScore([1,1,1,1,1], 'Chance')).toEqual(5);
  expect(Yahtzee.calculateScore([1,2,3,4,5], 'Chance')).toEqual(15);
});

it('returns correctly for three of kind', () => {
  expect(Yahtzee.calculateScore([6,2,6,6,5], 'ThreeKind')).toEqual(25);
  expect(Yahtzee.calculateScore([6,6,6,6,6], 'ThreeKind')).toEqual(30);
  expect(Yahtzee.calculateScore([4,3,1,1,1], 'ThreeKind')).toEqual(10);
  expect(Yahtzee.calculateScore([4,3,6,6,1], 'ThreeKind')).toEqual(0);
});

it('returns correctly for four of kind', () => {
  expect(Yahtzee.calculateScore([6,2,6,6,6], 'FourKind')).toEqual(26);
  expect(Yahtzee.calculateScore([6,6,6,6,6], 'FourKind')).toEqual(30);
  expect(Yahtzee.calculateScore([1,3,1,1,1], 'FourKind')).toEqual(7);
  expect(Yahtzee.calculateScore([4,3,6,6,1], 'FourKind')).toEqual(0);
});

it('returns correctly for yahtzee', () => {
  expect(Yahtzee.calculateScore([6,2,6,6,6], 'Yahtzee')).toEqual(0);
  expect(Yahtzee.calculateScore([6,6,6,6,6], 'Yahtzee')).toEqual(50);
  expect(Yahtzee.calculateScore([1,1,1,1,1], 'Yahtzee')).toEqual(50);
  expect(Yahtzee.calculateScore([1,3,1,1,1], 'Yahtzee')).toEqual(0);
  expect(Yahtzee.calculateScore([4,3,6,6,1], 'Yahtzee')).toEqual(0);
});

it('returns correctly for full house', () => {
  expect(Yahtzee.calculateScore([6,2,6,6,6], 'FullHouse')).toEqual(0);
  expect(Yahtzee.calculateScore([6,6,6,6,6], 'FullHouse')).toEqual(0);
  expect(Yahtzee.calculateScore([1,3,1,1,1], 'FullHouse')).toEqual(0);
  expect(Yahtzee.calculateScore([3,3,6,6,3], 'FullHouse')).toEqual(25);
  expect(Yahtzee.calculateScore([3,6,6,6,3], 'FullHouse')).toEqual(25);
  expect(Yahtzee.calculateScore([1,1,1,2,2], 'FullHouse')).toEqual(25);
});

it('returns correctly for large straight', () => {
  expect(Yahtzee.calculateScore([6,2,6,6,6], 'LargeStraight')).toEqual(0);
  expect(Yahtzee.calculateScore([6,6,6,6,6], 'LargeStraight')).toEqual(0);
  expect(Yahtzee.calculateScore([1,3,1,1,1], 'LargeStraight')).toEqual(0);
  expect(Yahtzee.calculateScore([4,3,6,6,1], 'LargeStraight')).toEqual(0);
  expect(Yahtzee.calculateScore([5,1,4,2,3], 'LargeStraight')).toEqual(40);
  expect(Yahtzee.calculateScore([5,4,3,2,1], 'LargeStraight')).toEqual(40);
  expect(Yahtzee.calculateScore([1,2,3,4,5], 'LargeStraight')).toEqual(40);
  expect(Yahtzee.calculateScore([1,2,3,4,6], 'LargeStraight')).toEqual(0);
});

it('returns correctly for small straight', () => {
  expect(Yahtzee.calculateScore([6,2,6,6,6], 'SmallStraight')).toEqual(0);
  expect(Yahtzee.calculateScore([6,6,6,6,6], 'SmallStraight')).toEqual(0);
  expect(Yahtzee.calculateScore([1,3,1,1,1], 'SmallStraight')).toEqual(0);
  expect(Yahtzee.calculateScore([4,3,6,6,1], 'SmallStraight')).toEqual(0);
  expect(Yahtzee.calculateScore([5,1,4,2,3], 'SmallStraight')).toEqual(30);
  expect(Yahtzee.calculateScore([5,4,3,2,1], 'SmallStraight')).toEqual(30);
  expect(Yahtzee.calculateScore([1,2,3,4,5], 'SmallStraight')).toEqual(30);
  expect(Yahtzee.calculateScore([1,2,3,4,4], 'SmallStraight')).toEqual(30);
  expect(Yahtzee.calculateScore([4,1,2,5,6], 'SmallStraight')).toEqual(0);
  expect(Yahtzee.calculateScore([4,3,2,5,6], 'SmallStraight')).toEqual(30);
});
