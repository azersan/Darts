import React from 'react';
import ScoreCell from './ScoreCell.jsx';

class ScoreRow extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="row">
        <ScoreCell side='left' point={this.props.point} pointStore={this.props.pointStore} />
        <div className="mid rowCell">{this.props.point}</div>
        <ScoreCell side='right' point={this.props.point} pointStore={this.props.pointStore} />
      </div>
    );
  }
}

export default ScoreRow;
