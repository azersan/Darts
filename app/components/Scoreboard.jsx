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
        <div className="col-xs-4 col-md-2 left rowCell">{this.state.leftScore}</div>
        <div className="col-xs-4 col-md-2 mid rowCell">vs</div>
        <div className="col-xs-4 col-md-2 right rowCell">{this.state.rightScore}</div>
      </div>
    );
  }
}

export default Scoreboard;
