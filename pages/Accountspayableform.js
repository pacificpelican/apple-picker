import React, { Component } from "react";
import Link from "next/link";

//  Accountspayableform.js ReactJS 16.3+ component for apple-picker
//  by Dan McKeown http://danmckeown.info copyright 2018

import Payer from "./payer";

export default class Accountspayableform extends Component {
  state = { Ok: true };

  constructor() {
    super();
  }

  UNSAFE_componentWillMount() {}

  componentDidMount() {}

  render() {
    return (
      <div id="basicComponentDiv">
        <div className="apple-picker-header">apple-picker _ A/P Entry </div>
        <Payer />
        <style jsx>
          {`
            div.apple-picker-header {
              font-family: "Ubuntu", "Lucida Sans", "Segoe UI", "Roboto", sans-serif;
            }
            div.apple-picker-content {
                font-family: "Hack", "Fira Code", "Menlo", monospace;
            }
            `}
        </style>
      </div>
    );
  }
}
