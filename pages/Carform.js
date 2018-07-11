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
        <style>{`
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
              width: calc(15vw + 15rem);
              height: 30vh;
              border: 1px solid #ccc;
            }
            input, select, textarea {
              padding: .5em .6em;
              margin-bottom: 0.3em;
              margin-top: 0.2em;
              display: inline-block;
            }
          `}</style>
      </div>
    );
  }
}
