import React from 'react';

class ScoreRow extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-xs-4 col-md-2 left">-</div>
        <div className="col-xs-4 col-md-2 mid">{this.props.point}</div>
        <div className="col-xs-4 col-md-2 right">-</div>
      </div>
    );
  }
}

export default ScoreRow;
