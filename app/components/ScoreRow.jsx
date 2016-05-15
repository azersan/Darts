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
    } else {
      if (!this.closedOut())
      this.props.pointStore.dispatch({
        type: 'ADD_POINTS',
        side: side,
        num_points: this.props.point==='B' ? 25 : Number(this.props.point)
      });
    }

    return null;
  }

  closedOut() {
    if (this.state.points['left'] >= 3 && this.state.points['right'] >= 3) {
      return true;
    }
    return false;
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
        <div className="rowCell"><button onClick={this.hitLeft} className="left">
          {this.state.symbols[this.state.points['left']]}
        </button></div>
        <div className="mid rowCell">{this.props.point}</div>
        <div className="rowCell"><button onClick={this.hitRight} className="right">
          {this.state.symbols[this.state.points['right']]}
        </button></div>
      </div>
    );
  }
}

export default ScoreRow;
