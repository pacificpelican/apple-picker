import React, { Component } from "react";
import Link from "next/link";

//  miler.js starter ReactJS 16.3+ component for apple-picker
//  by Dan McKeown http://danmckeown.info copyright 2018

import Textframe from "./textframe";
import Ladder from "./ladder";

export default class Miler extends Component {
  state = { Ok: true };

  constructor() {
    super();
  }

  UNSAFE_componentWillMount() { }

  componentDidMount() { }

  render() {
    return (
      <div id="picker">
        <div className="pear-content">
          <section id="snapshot">
            <Textframe notData="9"></Textframe>
            <h2 id="snapshot">Enter a Milage Estimate</h2>
            <form id="expense">
              <section className="milage-form"><span className="input-span">Miles: </span><input id="input-amount" /></section>
              <section className="milage-form"><span className="input-span">Date: </span><input id="input-date" /></section>
              <section className="milage-form"><span className="input-span">Destination: </span><input id="input-description" /></section>
              <section className="milage-form"><span className="input-span">Embarkment Point: </span><input id="input-description" /></section>
              <section className="milage-form"><span className="input-span">Round Trip?: </span><input type="radio" id="radioButton-roundTrip" /></section>
              <section className="milage-form"><span className="input-span">Description: </span><input id="input-description" /></section>
            </form>
          </section>
        </div>
        <style>
          {`
            div.pear-content {
                font-family: "Hack", "Fira Code", "Menlo", monospace;
            }
            `}
        </style>
      </div>
    );
  }
}
