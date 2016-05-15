import React from 'react';
import Scoreboard from './Scoreboard.jsx';
import ScoreRow from './ScoreRow.jsx';
import { createStore } from 'redux';

var points = ['20', '19', '18', '17', '16', '15', 'B'];

const pointIncrementer = (state = {left: 0, right:0}, action) => {
  var newState;
  if (action.type === 'ADD_POINTS') {
    if (action.side === 'left') {
      newState = {
        left: state['left'] + action.num_points,
        right: state['right']
      };
    } else if (action.side === 'right') {
      newState = {
        left: state['left'],
        right: state['right'] + action.num_points
      };
    } else {
      console.log('Invalid side');
    }
  } else {
    console.log('Couldn\'t find a match!');
    newState = state;
  }
  console.log('*****************************');
  console.log('Old state: ', state);
  console.log('Got an action: ', action);
  console.log('New state: ', newState);
  return newState;
}

var pointStore = createStore(pointIncrementer);

class Dartboard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      points : points
    };
  }

  render() {
    return (
      <div id="Dartboard">
        <Scoreboard pointStore={pointStore}/>
        {this.state.points.map(function(point) {
          return (
            <ScoreRow point={point} key={point} pointStore={pointStore}/>
          );
        })}
      </div>
    );
  }
}

export default Dartboard;
