import React, { Component } from 'react';

export default class Rules extends Component {
  render() {
    /*Aces (Ones)
          Total of Aces 
          Twos
          Total of Twos
          Threes
          Total of Threes
          Fours
          Total of Fours
          Fives
          Total of Fives
          Sixes
          Total of Sixes*/
    /*Lower Section
          What to score
          3 Of A Kind
          Total of all 5 dice
          4 Of A Kind
          Total of all 5 dice
          Full House
          25 points
          Small Straight
          30 points
          Large Straight
          40 points
          Yahtzee (5 Of A Kind)
          50 points
          Chance
          Total of all 5 dice

          Scoring – Upper Section */
    let values = [{
      "section": "3 of a Kind", 
      "description": "You need at least 3 of the same die faces. You score the total of all the dice",
      "points": ""
    },{
      "section": "4 of a Kind",
      "description": "You need at least 4 of the same die faces. You score the total of all the dice.",
      "points": ""
    },{
      "section": "Straight",
      "description": "A sequence of consecutive die faces, where a Small Straight is 4 consecutive faces, and a Large Straight is 5 consecutive faces. Small Straights score 30 points and Large Straights score 40 points.",
      "points": ""
    },{
      "section": "Full House",
      "description": "When you have both a 3 of a Kind and a 2 of a Kind. Full Houses score 25 points.",
      "points": ""
    },{
      "section": "Chance",
      "description": "Can be the total of any 5 dice. You score the total of all the die faces.",
      "points": ""
    },{
      "section": "First Yahtzee",
      "description": "A Yahtzee is 5 Of A Kind (that is, where all five dice show the same number) and scores 50 points, although you may decide not to score it as a Yahtzee, and take it as a top row score instead so as to hold on to your bonus.",
      "points": ""
    },{
      "section": "Yahtzee Bonus",
      "description": "If you have already rolled a Yahtzee and filled the Yahtzee box and you subsequently roll a second Yahtzee, you get a bonus of 100 points. You may take a bonus chip and place a check in the Yahtzee Bonus box on the scorecard. Then fill in one of the 13 boxes on the scorecard in line with the Joker Rules detailed below.",
      "points": ""
    }];

    let rows = values.map(x => {
      return (
        <tr>
          <td>{x.section}</td>
          <td>{x.description}</td>
          <td>{x.points}</td>
        </tr>
      );
    });

    return (
      <div className='rules'>
        <h2 className="cardTitle">Yahtzee Rules</h2>

        <div className='rulesText'>

          <p>Yahtzee is a game of chance, the object of which is to score the most points by throwing 5 dice to make particular combinations. There are 13 rounds; in each one, you roll the dice and then score the roll in one of 13 categories. There are different rules for each category and these determine the score.</p>

          <p>To play Yahtzee, you'll need 5 dice, a dice cup, 10 bonus chips, and a score pad and pen. Each player gets a scorecard and takes a turn rolling the 5 dice. The player with the highest score goes first, followed by the player on the left. The dice continue to be passed to the left throughout the game.</p>

          <h2 className='title'>Taking a turn</h2>

          <p>When taking a turn, the dice can be rolled up to 3 times. However, you can choose to stop after your first or second roll. </p>

          <p>First roll: Roll the 5 dice. </p>
          <p>Second roll: Roll any or all of the dice you want. You don't need to state which combination you're rolling for, and you can change your mind after any roll. </p>
          <p>Third roll: Roll any or all of the dice you want. You must now fill in a box on your scorecard with either a score or a zero. At this point, your turn is over.</p>

          <h2 className='title'>Scoring</h2>

          <p>When you are finished rolling (after either your first, second or third roll), you must decide which box to fill in on your scorecard. There is a column of 13 boxes, and you must fill in a box on each turn. If you can't, or choose not to enter a score, you must enter a zero. Fill in each box once, in any order, depending on your best scoring option. Once a category has been scored, it cannot be scored again for the rest of the game (except for the Yahtzee category).</p>

          <p>The scorecard is divided into an Upper Section and a Lower Section. Scoring combinations for each section are detailed in the below table:</p>

          <h2 className='title'>Upper Section</h2>
          <table>
          </table>

          <p>If you score in the upper section of the table, your score is the total of the combined dice. For example, if you score 5/3/5/4/5 and score in the Fives category, your total for the category would be 15, because there are three fives and these are added together. If the One, Two or Six Categories were selected for scoring with this roll, you would score a zero. If placed in the Three or Four category, you would score 3 and 4 respectively. Bonus: If the total of the upper section scores is 63 or more, you get a bonus of 35 (63 is the total of three each of 1s, 2s, 3s, 4s, 5s and 6s).</p>

          <h2 className='title'>Scoring – Lower Section</h2>

          <p>In the lower scores, you score either a specific amount, or a zero (if you are unable to meet the category requirements). You can score the following:</p>

          <article className="message is-dark">
            <div className="message-body">
              <table className='table is-striped'>
                <thead>
                  <tr><td>Section</td><td>Description</td><td>Points</td></tr>
                </thead>
                {rows}
              </table>
            </div>
          </article>

          <h2 className='title'>Joker Rules</h2>

          <p>If the corresponding Upper Section category is not filled then you must put your score there. For example, if you rolled 2/2/2/2/2 and the Twos Category is not filled, you must put the score in the Fours category. If the corresponding Upper Section category is filled you may then put the score anywhere on the Upper Section (scoring zero). In 3 Of A Kind, 4 Of A Kind and Chance categories, you would score the total of the die faces. For the Small Straight, Large Straight, and Full House categories, you would score 30, 40 and 25 points respectively.</p>

          <h2 className='title'>Example Play</h2>

          <p>First roll: Let's say you roll 2/3/4/4/5. You've already got a Small Straight, but you could roll again for Fours, 3 Of A Kind or a Large Straight. You decide to keep the Small Straight and re-roll 1 dice.</p>

          <p>Second roll: You roll a Two. You could re-roll the die again to try to get a Large Straight, or keep the 2 Twos from the previous roll and roll again for Twos or for 3 Of A Kind. You decide to keep the Twos and re-roll the remaining 3 dice.</p>

          <p>Third roll: You roll 1 Two and 2 Threes. You could score 6 points for the Twos, 12 points for 3 Of A Kind, or 25 points for a Full House. You decide on the Full House because you're less likely to roll this combination again. By now you're ahead in the Upper Section and may not need 3 Twos for your 35-point bonus; and also. It's also still possible that you'll roll a 3 Of A Kind later in the game to maximise your points. At this point, your turn is over.</p>

          <h2 className='title'>Winning</h2>

          <p>The player who scores the most points (including bonus points) once all players have filled in the 13 category boxes  is declared the winner...and that's Yahtzee!</p>
        </div>
      </div>
    );
  }
}
