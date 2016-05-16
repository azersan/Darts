import React from 'react';

class ScoreCell extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      points: 0,
      symbols: ["-", "/", "X", "O"]
    };
  }

  registerHit() {
    var side=this.props.side;
    if (this.state.points < 3) {
      this.setState({points: this.state.points + 1});
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

  render() {
    return (
        <div className="rowCell"><button onClick={this.registerHit.bind(this)} className={this.props.side}>
          {this.state.symbols[this.state.points]}
        </button></div>
    );
  }
}

export default ScoreCell;
