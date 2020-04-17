import React, { Component } from 'react';
import './App.css';
import res from './Results.js'
import hea from './Header.js'
import nav from './nav.js'
import sear from './Search.js'

class App extends Component {
  render() {
    return (
      <hea/>
      <nav/>
      <sear/>
      <res/>
    );
  }
}

export default App;
