import React, { Component } from "react";
import Link from "next/link";

//  Home.js ReactJS 16.3+ component for apple-picker
//  by Dan McKeown http://danmckeown.info copyright 2018

import Textframe from "./textframe";

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

  UNSAFE_componentWillMount() {}

  componentDidMount() {}

  render(props) {
    return (
      <div id="apple-picker-home">
        <Textframe />
        <section id="content-section" />
        <style>
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
            `}
        </style>
      </div>
    );
  }
}
