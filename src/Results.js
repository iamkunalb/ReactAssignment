import React, { Component } from 'react';
import data from './data/testData.json'
import './App.css';

class Results extends Component {
  render() {
    return data.map(function(obj){
      var oCity = document.getElementById('oCity');
      var dCity = document.getElementById('dCity');
      // var dDate = document.getElementById('dDate');

      // if (document.getElementById("OneWay").style.display == "block"){
      //   document.getElementById("ref").hidden = false;
      //
      // }else if (document.getElementById("Return").style.display == "block") {
      //   document.getElementById("ref2").hidden = false;
      // }

        // if (oCity == obj.from && dCity == obj.to) {
        console.log("Name: " + obj.from + ", " + obj.to);
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
      // }
    })
  }


}

export default Results;
