import React from 'react';
import Scoreboard from './Scoreboard.jsx';
import ScoreRow from './ScoreRow.jsx';
import { createStore } from 'redux';

var points = ['20', '19', '18', '17', '16', '15', 'B'];
var initialState = {
  left: 0,
  right: 0,
  individiualPoints: {
    20: {
      left: 0,
      right: 0
    },
    19: {
      left: 0,
      right: 0
    },
    18: {
      left: 0,
      right: 0
    },
    17: {
      left: 0,
      right: 0
    },
    16: {
      left: 0,
      right: 0
    },
    15: {
      left: 0,
      right: 0
    },
    B: {
      left: 0,
      right: 0
    }
  }
}

const addPoint = (state, action) => {
  var newState = JSON.parse(JSON.stringify(state));
  if (action.side === 'left') {
    newState['left'] = state['left'] + action.num_points;
  } else if (action.side === 'right') {
    newState['right'] = state['right'] + action.num_points;
  } else {
    console.log('Invalid side');
  }
  return newState;
}

const registerHit = (state, action) => {
  var newState = JSON.parse(JSON.stringify(state));
  var point = action.point;
  var side = action.side;
  var old = state['individiualPoints'][point][side];
  if (old < 3) {
    newState['individiualPoints'][point][side] = old + 1;
  }
  return newState;
}

const pointIncrementer = (state = initialState, action) => {
  var newState;
  if (action.type === 'ADD_POINTS') {
    newState = addPoint(state, action);
  } else if (action.type === 'REGISTER_HIT') {
    newState = registerHit(state, action);
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

var getPointStore = function() {
  return pointStore;
}

export { getPointStore };
