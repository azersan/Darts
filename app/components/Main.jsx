var React = require('react');
var ReactDOM = require('react-dom');

var Main = React.createClass({
  render: function(){
    return (
      <Dartboard />
    )
  }
});

var Dartboard = React.createClass({
  render: function(){
    return (
      <div className="container">
        <Scoreboard />
      </div>
    )
  }
});

var Scoreboard = React.createClass({
  getInitialState: function () {
    return {
      redScore: 14,
      blueScore: 95
    }
  },

  render: function(){
    return (
      <div className="row">
        <div className="col-xs-4 left">{this.state.redScore}</div>
        <div className="col-xs-4 mid">vs</div>
        <div className="col-xs-4 right">{this.state.blueScore}</div>
      </div>
    )
  }
});

ReactDOM.render(<Main />, document.getElementById('app'));
