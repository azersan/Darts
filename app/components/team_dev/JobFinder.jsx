import React from 'react';
import FilterList from './FilterList.jsx';
import RoleList from './ROleList.jsx';

class JobFinder extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <FilterList />
        <RoleList />
      </div>
    );
  }
}

export default JobFinder;
