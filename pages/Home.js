import React, { Component } from "react";
import Link from "next/link";

//  Home.js ReactJS 16.3+ component for apple-picker
//  by Dan McKeown http://danmckeown.info copyright 2018

import Textframe from "./textframe";

import Driving from "./Driving";
import Revenue from "./Revenue";
import Expense from "./Expense";
import Time from "./Time";

export default class Homeß extends Component {
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
      <div id="apple-picker-home">
        <Textframe />
        <h1 id="applePicker">Apple Picker</h1>
        <h4 id="accounting">accounting software from <a href="http://altaredwood.work">AltaRedwood.work</a></h4>
        <Revenue />
        <Expense />
        <Driving />
        <Time />
        <section id="content-section" />
        <style jsx>
          {`
            div.pear-content {
              font-family: "Hack", "Fira Code", "Menlo", monospace;
            }
            ul.ladder-content li {
              display: inline-block;
              padding-right: 1rem;
            }
            ul.ladder-content li {
              font-family: "Hack", "Fira Code", "Menlo", monospace;
            }
            h1#applePicker, h4#accounting {
              font-family: "Lato", "Lucida Sans", "Open Sans", sans-serif;
            }
            `}
        </style>
      </div>
    );
  }
}
