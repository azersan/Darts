import React from 'react';

class ScoreCell extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      symbols: ["-", "/", "X", "O"]
    };
    props.pointStore.subscribe(this.forceUpdate.bind(this));
  }

  registerHit() {
    this.props.pointStore.dispatch({
      type: 'REGISTER_HIT',
      side: this.props.side,
      point: this.props.point
    });
  }

  render() {
    return (
        <div className="rowCell"><button onClick={this.registerHit.bind(this)} className={this.props.side}>
          {this.state.symbols[this.props.pointStore.getState()['individiualPoints'][this.props.point][this.props.side]]}
        </button></div>
    );
  }
}

export default ScoreCell;
