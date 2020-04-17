import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import Header from './Header.js'
import Results from './Results.js'
import Search from './Search.js'

import './index.css';

ReactDOM.render(
  <Header />,
  document.getElementById('root')
);


// ReactDOM.render(
//   <Results />,
//   document.getElementById('card')
// );



ReactDOM.render(
  <Search />,
  document.getElementById('container')
);
