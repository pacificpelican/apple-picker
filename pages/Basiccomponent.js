import React, { Component } from "react";
import Link from "next/link";

//  Basiccomponent.js starter ReactJS 16.3+ component for apple-picker
//  by Dan McKeown http://danmckeown.info copyright 2018

export default class Basiccomponent extends Component {
  state = { Ok: true };

  constructor() {
    super();
  }

  UNSAFE_componentWillMount() {}

  componentDidMount() {}

  render() {
    return (
      <div id="basicComponentDiv">
        <div className="apple-picker-content">BASIC COMPONENT _</div>
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
