import React from 'react';

import './App.css';
import LaunchProfileContainer from './containers/LaunchProfile';
import LaunchListContainer from './containers/LaunchList';

export default function App () {
  return (
    <div className="App">
      Hello world2
      <LaunchListContainer />
      <LaunchProfileContainer />
    </div>
  );
};