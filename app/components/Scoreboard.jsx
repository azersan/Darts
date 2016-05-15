import React from 'react';

class Scoreboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      leftScore: 14,
      rightScore: 89
    };
    props.pointStore.subscribe(this.forceUpdate.bind(this));
  }

  render() {
    return (
      <div className="row">
        <div className="col-xs-4 col-md-2 left rowCell">{this.props.pointStore.getState()['left']}</div>
        <div className="col-xs-4 col-md-2 mid rowCell">vs</div>
        <div className="col-xs-4 col-md-2 right rowCell">{this.props.pointStore.getState()['right']}</div>
      </div>
    );
  }
}

export default Scoreboard;
