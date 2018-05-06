import React, { Component } from "react";
import Link from "next/link";

//  Carform.js ReactJS 16.3+ component for apple-picker
//  by Dan McKeown http://danmckeown.info copyright 2018

import Miler from "./miler";

export default class Carform extends Component {
  state = { Ok: true };

  constructor() {
    super();
  }

  UNSAFE_componentWillMount() {}

  componentDidMount() {}

  render() {
    return (
      <div id="basicComponentDiv">
        <div className="apple-picker-content">apple-picker _ Car Trip Entry </div>
        <Miler />
        <style>
          {`
            div.apple-picker-content {
                font-family: "Hack", "Fira Code", "Menlo", monospace;
            }
            `}
        </style>
      </div>
    );
  }
}
