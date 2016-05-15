import React from 'react';

class ScoreRow extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      points: {
        left: 0,
        right: 0
      },
      symbols: ["-", "/", "X", "O"]
    };
    this.hitLeft = this.hitLeft.bind(this);
    this.hitRight = this.hitRight.bind(this);
  }

  registerHit(side) {
    var side=arguments[0];
    if (this.state.points[side] < 3) {
      var newPoints = this.state.points;
      newPoints[side] = newPoints[side] + 1;
      this.setState({points: newPoints});
    }

    return null;
  }

  hitLeft() {
    this.registerHit("left");
  }

  hitRight() {
    this.registerHit("right");
  }

  render() {
    return (
      <div className="row">
        <div className="col-xs-4 col-md-2 left">
          <button onClick={this.hitLeft}>{this.state.symbols[this.state.points['left']]}</button>
        </div>
        <div className="col-xs-4 col-md-2 mid">{this.props.point}</div>
        <div className="col-xs-4 col-md-2 right">
          <button onClick={this.hitRight}>{this.state.symbols[this.state.points['right']]}</button>
        </div>
      </div>
    );
  }
}

export default ScoreRow;
