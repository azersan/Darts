import React from 'react';

class Scoreboard extends React.Component {
  // getInitialState() {
  //   return {
  //     redScore: 14,
  //     blueScore: 95
  //   };
  // }

  render() {
    return (
      <div className="row">
        <div className="col-xs-4 left">12</div>
        <div className="col-xs-4 mid">vs</div>
        <div className="col-xs-4 right">98</div>
      </div>
    );
  }
}

export default Scoreboard;
