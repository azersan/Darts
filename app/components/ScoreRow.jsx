import React from 'react';

class ScoreRow extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-xs-4 left">-</div>
        <div className="col-xs-4 mid">{this.props.point}</div>
        <div className="col-xs-4 right">-</div>
      </div>
    );
  }
}

export default ScoreRow;
