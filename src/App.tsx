import React from 'react';

import './App.css';
import LaunchProfile from './components/LaunchProfile/component';
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