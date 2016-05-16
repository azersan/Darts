import React from 'react';
import Scoreboard from './Scoreboard.jsx';
import ScoreRow from './ScoreRow.jsx';
import { getPointStore } from './PointStore.jsx';
import { createStore } from 'redux';

var points = ['20', '19', '18', '17', '16', '15', 'B'];
var pointStore = getPointStore();
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
