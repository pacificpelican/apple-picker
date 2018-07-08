import React, { Component } from "react";
import Link from "next/link";

//  Timeform.js ReactJS 16.3+ component for apple-picker
//  by Dan McKeown http://danmckeown.info copyright 2018

import Timer from "./timer";

export default class Timeform extends Component {
  state = { Ok: true };

  constructor() {
    super();
  }

  UNSAFE_componentWillMount() {}

  componentDidMount() {}

  render() {
    return (
      <div id="basicComponentDiv">
        <div className="apple-picker-content">apple-picker _ Time Sheet Entry </div>
        <Timer />
        <style jsx global>
          {`
            div.apple-picker-content {
                font-family: "Hack", "Fira Code", "Menlo", monospace;
            }
            input {
              padding: .5em .6em;
              margin-bottom: 0.3em;
              margin-top: 0.2em;
              display: inline-block;
              border: 1px solid #ccc;
              box-shadow: inset 0 1px 3px #ddd;
              border-radius: 4px;
              vertical-align: middle;
              box-sizing: border-box;
            }
          `}
        </style>
      </div>
    );
  }
}
