import React from 'react';
import {render} from 'react-dom';
import Dartboard from './Dartboard.jsx'

class Main extends React.Component {
  render () {
    return (
      <Dartboard />
    );
  }
}

render(<Main />, document.getElementById('app'));
