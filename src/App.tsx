import React from 'react';

import './App.css';
import LaunchProfile from './containers/LaunchList';
import LaunchList from './containers/LaunchList';

export default function App () {
  return (
    <div className="App">
      Hello world2
      <LaunchList />
      <LaunchProfile />
    </div>
  );
};