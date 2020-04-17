import React, { Component } from 'react';
import './App.css';
// import data from './data/testData.json'
// import header from './Header.js'

class Header extends Component {
  render() {
    return (
      <div className="bg-img-overlay">
        <div className="App">
          <div className="App-header">
            <img src="https://www.pngkey.com/png/full/142-1427758_united-states-of-america-rugby-football-union-ltd.png" className="App-logo" alt="logo" />
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
