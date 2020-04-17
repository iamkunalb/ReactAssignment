import React, { Component, Slider } from 'react';
import './App.css';
import './index.css';
import data from './data/testData.json'

class Search extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this) ;
    this.handleChange = this.handleChange.bind(this) ;
    this.tabOW = this.tabOW.bind(this) ;
    this.tabR = this.tabR.bind(this) ;
  }

  handleClick() {
    render: {
      console.log(document.getElementById('rs').style);
      document.getElementById("mainThing").innerHTML = "";
      var oCity = document.getElementById('oCity').value;
      var dCity = document.getElementById('dCity').value;
      var dDate = document.getElementById('dDate').value;

      if (oCity.length == 0 || dCity.length == 0){
        const div = document.createElement('div');
        div.className = 'track';
        div.innerHTML = `
          <div>
            <h1 style="float:left" id="origin">Please enter valid search entries</h1>
          </div>
        `
        document.getElementById('mainThing').appendChild(div);
      }else{
        if (document.getElementById('defaultOpen').style.backgroundColor == "rgb(40, 183, 225)"){
          const div = document.createElement('div');
          div.className = 'track';
          div.innerHTML = `
            <div>
              <h1 style="float:left" id="origin">${document.getElementById('oCity').value}</h1>
              <h1 style="float:left" id="nex">&nbsp;>&nbsp;</h1>
              <h1 style="float:left" id="dest">${document.getElementById('dCity').value}</h1>
            </div>
          `
          document.getElementById('mainThing').appendChild(div);
        }else{
          const div = document.createElement('div');
          div.className = 'track';
          div.innerHTML = `
            <div>
              <h1 style="float:left" id="origin">${document.getElementById('oCity').value}</h1>
              <h1 style="float:left" id="nex">&nbsp;>&nbsp;</h1>
              <h1 style="float:left" id="dest">${document.getElementById('dCity').value}</h1>
              <h1 style="float:left" id="nex2">&nbsp;>&nbsp;</h1>
              <h1 style="float:left" id="origin2">${document.getElementById('oCity').value}</h1>
            </div>
          `
          document.getElementById('mainThing').appendChild(div);
        }

      }

      var oCity = document.getElementById('oCity').value;
      var dCity = document.getElementById('dCity').value;
      var dDate = document.getElementById('dDate').value;
      var rDate = document.getElementById('rDate').value;

      var minPrice = document.getElementById('minPrice');
      var maxPrice = document.getElementById('maxPrice');

      return data.map(function(obj){
        // console.log(typeof(dDate));
        // console.log(typeof(obj.depatureDate));


        if (document.getElementById('defaultOpen').style.backgroundColor == "rgb(40, 183, 225)"){
          if (oCity == obj.from && dCity == obj.to) {
            if (Date.parse(obj.depatureDate) == Date.parse(dDate)){
              if (obj.price >= minPrice.innerHTML && obj.price <= maxPrice.innerHTML){
                  const div = document.createElement('div');
                  div.className = 'card';
                  div.innerHTML = `

                    <div class="flights">
                      <div style="float:right;margin-top:20px">
                        <img style="float: bottom ;margin-right:50px;height:200px;width:200px;" src="https://www.climateleaderscoalition.org.nz/__data/assets/image/0008/149192/airnz-450.jpg"/>
                      </div>

                      <h1>$${obj.price}</h1>
                      <p>${obj.flightNo}</p>

                      <div style="float:left">
                        <h3 class="h3r" id="o">${obj.from}</h3>
                        <h3 class="h3r" id="n">&nbsp;>&nbsp;</h3>
                        <h3 class="h3r2" id="d">${obj.to}</h3>
                        <h3 class="h3r">Depart: ${obj.depatureDate} ${obj.departTime}</h3>
                        <h3 class="h3r2">Arrive: ${obj.arrivalDate} ${obj.arriveTime}</h3>
                        <button class="search" style="margin-top:10px" class="search">Book</button>

                      </div>
                    </div>
                  `
                  document.getElementById('mainThing').appendChild(div);
                }
              }
            }
          }else{
            if (oCity == obj.from && dCity == obj.to) {
              if (Date.parse(obj.depatureDate) == Date.parse(dDate)){
                if (obj.price >= minPrice.innerHTML && obj.price <= maxPrice.innerHTML){
                    const div = document.createElement('div');
                    div.className = 'card';
                    div.innerHTML = `

                    <div class="flights">
                      <div style="float:right;margin-top:20px">
                        <img style="float: bottom ;margin-right:50px;height:200px;width:200px;" src="https://www.climateleaderscoalition.org.nz/__data/assets/image/0008/149192/airnz-450.jpg"/>
                      </div>

                      <h1>$${obj.price}</h1>
                      <p>${obj.flightNo}</p>

                      <div style="float:left">
                        <h3 class="h3r" id="o">${obj.from}</h3>
                        <h3 class="h3r" id="n">&nbsp;>&nbsp;</h3>
                        <h3 class="h3r2" id="d">${obj.to}</h3>
                        <h3 class="h3r">Depart: ${obj.depatureDate} ${obj.departTime}</h3>
                        <h3 class="h3r2">Arrive: ${obj.arrivalDate} ${obj.arriveTime}</h3>
                        <button class="search" style="margin-top:10px" class="search">Book</button>

                      </div>
                    </div>
                    `
                    document.getElementById('mainThing').appendChild(div);
                  }
                }
              }
          if (oCity == obj.to && dCity == obj.from) {
            if (Date.parse(obj.arrivalDate) == Date.parse(rDate)){
              if (obj.price >= minPrice.innerHTML && obj.price <= maxPrice.innerHTML){
                  const div = document.createElement('div');
                  div.className = 'card';
                  div.innerHTML = `

                  <div class="flights">
                    <div style="float:right;margin-top:20px">
                      <img style="float: bottom;margin-right:50px;height:200px;width:200px;" src="https://www.climateleaderscoalition.org.nz/__data/assets/image/0008/149192/airnz-450.jpg"/>
                    </div>

                    <h1>$${obj.price}</h1>
                    <p>${obj.flightNo}</p>

                    <div style="float:left">
                      <h3 class="h3r" id="o">${obj.from}</h3>
                      <h3 class="h3r" id="n">&nbsp;>&nbsp;</h3>
                      <h3 class="h3r2" id="d">${obj.to}</h3>
                      <h3 class="h3r">Depart: ${obj.depatureDate} ${obj.departTime}</h3>
                      <h3 class="h3r2">Arrive: ${obj.arrivalDate} ${obj.arriveTime}</h3>
                      <button class="search" style="margin-top:10px" class="search">Book</button>

                    </div>
                  </div>
                  `
                  document.getElementById('mainThing').appendChild(div);
                }
              }
            }
        }
      })
      if (document.getElementsByClassName("card").innerHTML = ""){
        document.getElementsByClassName('card').innerHTML = "<h1>No Flights Found :(<h1>";
      }
    }
  }

  handleChange() {
    var min = document.getElementById('min').value;
    var max = document.getElementById('max').value;

    var minPrice = document.getElementById('minPrice');
    var maxPrice = document.getElementById('maxPrice');

    minPrice.innerHTML = min;
    maxPrice.innerHTML = max;

  }

  tabOW(){
    document.getElementById('rd').style.display = "none";
    document.getElementById('defaultOpen').style.backgroundColor = "#28B7E1";
    document.getElementById('rs').style.backgroundColor = "#fff";
  }

  tabR(){
    document.getElementById('rd').style.display = "block";
    document.getElementById('defaultOpen').style.backgroundColor = "#fff";
    document.getElementById('rs').style.backgroundColor = "#28B7E1";
  }

  render() {
      return (
          <div id="searchbox">
            <div className="tab">
              <button className="tablinks" style={{backgroundColor: '#28B7E1'}} id="defaultOpen" onClick={this.tabOW}>One Way</button>
              <button className="tablinks" id="rs" onClick={this.tabR}>Return</button>
            </div>
            <div className="seF">
              <div>
                <div className="searchFields">
                  <input className="inputRight" id="oCity" type="text" name="" placeholder="Origin City" />
                </div>

                <div className="searchFields">
                  <input className="inputRight" id="dCity" type="text" name="" placeholder="Destination City"/>
                </div>

                <div className="searchFields">
                  <p style={{float: 'left', marginLeft:'25px'}}>Departure Date</p>
                  <input  className="dateRight" id="dDate" type="date" name="" />
                </div>

                <div id="rd" style={{display: 'none'}} className="searchFields">
                  <p style={{float: 'left', marginLeft:'25px'}}>Return Date</p>
                  <input className="dateRight" id="rDate" type="date" name="" />
                </div>

                <div className="searchFields">

                  <select className="dropp">
                    <option value="pass" selected disabled>Passengers</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                  <input className="search" type="submit" name="" onClick={this.handleClick} value="Search"/>
                </div>

                <div id="ref" className="refine">
                  <h4 style={{marginLeft:'50px',color:'black'}}>Refine Search</h4>
                  <div className="price-slider">
                    <span>
                      <p id="minPrice" className="fromPrice" type="number" min="0" max="3000">0</p>



                      <input id="max" min="0" max="3000" step="10" type="range" onChange={this.handleChange}/>
                      <input id="min" min="0" max="3000" step="10" type="range" onChange={this.handleChange}/>

                      <p id="maxPrice" className="toPrice" type="number" min="0" max="3000">3000</p>
                    </span>
                  </div>
                </div>
              </div>




            </div>
          </div>
      );
    }
}

export default Search;
