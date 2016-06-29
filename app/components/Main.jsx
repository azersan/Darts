import React from 'react';
import {render} from 'react-dom';
import Dartboard from './Dartboard.jsx'
import JobFinder from './team_dev/JobFinder.jsx'

class Main extends React.Component {
  render () {
    return (
      <JobFinder />
    );
  }
}

render(<Main />, document.getElementById('app'));
