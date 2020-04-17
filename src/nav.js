import React, { Component } from 'react';
import './App.css';

class Results extends Component {
  render() {
      return (
        <div className="flights">
          <h1 >${obj.price}</h1>
          <p>{obj.flightNo}</p>
          <div>
            <h3 className="h3r" id="o">{obj.from}</h3>
            <h3 className="h3r" id="n">&nbsp;>&nbsp;</h3>
            <h3 className="h3r2" id="d">{obj.to}</h3>
          </div>
          <h3 className="h3r2">Depart: 10.00 AM</h3>
          <h3 className="h3r2">Arrive: 12.00 PM</h3>
        </div>
      );
    })
  }
}

export default Results;
