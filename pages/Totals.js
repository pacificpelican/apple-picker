import React, { Component } from "react";
import Link from "next/link";

//  Totals.js ReactJS 16.3+ component for apple-picker
//  by Dan McKeown http://danmckeown.info copyright 2018

import Driving from "./Driving";
import Revenue from "./Revenue";
import Expense from "./Expense";
import Time from "./Time";

import Textframe from "./textframe";

export default class Totals extends Component {
  state = { Ok: true };

  constructor() {
    super();

  }

  reloadOnce() {
    console.log("about to reload");
    return window.location.reload();
    return false;
  }

  UNSAFE_componentWillMount() {
  //  this.doLookupRevenues();
  }

  componentDidMount() {
   
  }

  render(props) {
    return (
      <div id="totals">
        <Textframe />
        <h1 id="applePicker">Totals</h1>
        <Revenue />
        <Expense />
        <Driving />
        <Time />
        <section id="content-section" />
        <style jsx>
          {`
            div#totals {
              font-family: "Hack", "Fira Code", "Menlo", monospace;
            }
            `}
        </style>
      </div>
    );
  }
}
