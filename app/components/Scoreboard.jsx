import React from 'react';

class Scoreboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      leftScore: 14,
      rightScore: 89
    };
  }

  render() {
    return (
      <div className="row">
        <div className="col-xs-4 col-md-2 left">{this.state.leftScore}</div>
        <div className="col-xs-4 col-md-2 mid">vs</div>
        <div className="col-xs-4 col-md-2 right">{this.state.rightScore}</div>
      </div>
    );
  }
}

export default Scoreboard;
