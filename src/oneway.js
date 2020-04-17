import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { Constants } from 'expo';

export default class Return extends Component {
  render() {
    return (
      <div id="OneWay" class="tabcontent">
        <div class="searchFields">
          <input class="inputRight" id="oCity" type="text" name="" placeholder="Origin City" value="">
        </div>

        <div class="searchFields">
          <input class="inputRight" id="dCity" type="text" name="" placeholder="Destination City" value="">
        </div>

        <div class="searchFields">
          <input class="dateRight" id="dDate" type="text" name="" placeholder="Departure Date" onfocus="(this.type='date')" onblur="(this.type='text')" value="">
        </div>

        <div class="searchFields">
          <select class="dropp">
            <option value="pass" selected isabled>Passengers</option>
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
          <input class="search" type="submit" name="" onclick="doit()" value="Search">
        </div>

        <div id="ref" hidden class="refine">
          <h4 style="margin-left:50px;color:black;">Refine Search</h4>
          <div class="price-slider">
            <span>
              <input class="fromPrice" type="number" value="0" min="0" max="10000"/>

              <input value="0" min="0" max="10000" step="50" type="range"/>
              <input value="10000" min="0" max="10000" step="50" type="range"/>

              <input class="toPrice" type="number" value="10000" min="0" max="10000"/>
            </span>
          </div>
        </div>
      </div>
    );
  }
}
