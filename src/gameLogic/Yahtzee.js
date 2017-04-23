import _ from 'lodash';

export default class Yahtzee {
  static calculateScore(dice, category) {
    const counts = _.countBy(dice);
    if (category === 'Ones') return counts['1'] || 0;
    if (category === 'Twos') return counts['2'] * 2 || 0;
    if (category === 'Threes') return counts['3'] * 3 || 0;
    if (category === 'Fours') return counts['4'] * 4 || 0;
    if (category === 'Fives') return counts['5'] * 5 || 0;
    if (category === 'Sixes') return counts['6'] * 6 || 0;
    if (category === 'Chance') return _.sum(dice);

    if (category === '3 of a Kind') {
      const freqs = Object.keys(counts).map(x => counts[x]);
      if (_.max(freqs) >= 3) return _.sum(dice);
      return 0;
    }

    if (category === '4 of a Kind') {
      const freqs = Object.keys(counts).map(x => counts[x]);
      if (_.max(freqs) >= 4) return _.sum(dice);
      return 0;
    }

    if (category === 'Yahtzee') {
      const freqs = Object.keys(counts).map(x => counts[x]);
      if (_.max(freqs) === 5) return 50;
      return 0;
    }

    if (category === 'Full House') {
      const freqs = Object.keys(counts).map(x => counts[x]);
      if (_.max(freqs) === 3 && _.min(freqs) === 2) return 25;
      return 0;
    }

    const sorted = _.orderBy(dice);
    if (category === 'Lg Straight') {
      const solutions = [
        _.range(1, 6),
        _.range(2, 7)
      ];
      const match = solutions.some(solution => Yahtzee.containsArray(solution, sorted));
      return match ? 40 : 0;
    }

    if (category === 'Sm Straight') {
      const solutions = [
        _.range(1, 5),
        _.range(2, 6),
        _.range(3, 7)
      ];
      const match = solutions.some(solution => Yahtzee.containsArray(solution, sorted));
      return match ? 30 : 0;
    }

    throw new Error('Unknown category');
  }

  // put in helpers
  static containsArray(arr1, arr2) {
    return _.isEqual(_.intersection(arr1, arr2), arr1);
  }
}
