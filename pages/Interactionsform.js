import React, { Component } from "react";
import Link from "next/link";

//  Interactionsform.js ReactJS 16.3+ component for apple-picker
//  by Dan McKeown http://danmckeown.info copyright 2018

import Interacter from "./interacter";

export default class Interactionsform extends Component {
  state = { Ok: true };

  constructor() {
    super();
  }

  UNSAFE_componentWillMount() {}

  componentDidMount() {}

  render() {
    return (
      <div id="basicComponentDiv">
        <div className="apple-picker-header">apple-picker _ Interaction Tracking </div>
        <Interacter />
        <style jsx global>
          {`
            div.apple-picker-header {
              font-family: "Ubuntu", "Lucida Sans", "Segoe UI", "Roboto", sans-serif;
            }
            div.apple-picker-content {
                font-family: "Hack", "Fira Code", "Menlo", monospace;
            }
            input {
              border: 1px solid #ccc;
              box-shadow: inset 0 1px 3px #ddd;
              border-radius: 4px;
              vertical-align: middle;
              box-sizing: border-box;
            }
            select {
              height: 2.25em;
              border: 1px solid #ccc;
              background-color: #fff;
              -webkit-writing-mode: horizontal-tb !important;
            }
            textarea {
              width: calc(15vw + 10rem);
              height: 30vh;
              border: 1px solid #ccc;
            }
            input, select, textarea {
              padding: .5em .6em;
              margin-bottom: 0.3em;
              margin-top: 0.2em;
              display: inline-block;
            }
          `}
        </style>
      </div>
    );
  }
}
