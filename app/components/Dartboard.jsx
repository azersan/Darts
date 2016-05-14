import React from 'react';
import Scoreboard from './Scoreboard.jsx'
import ScoreRow from './ScoreRow.jsx'

var points = ['20', '19', '18', '17', '16', '15', 'B'];

class Dartboard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {points : points};
  }

  render() {
    return (
      <div id="Dartboard" className="container">
        <Scoreboard />
        {this.state.points.map(function(point) {
          return (
            <ScoreRow point={point} />
          );
        })}
      </div>
    );
  }
}

export default Dartboard;
