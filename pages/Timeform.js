import React, { Component } from "react";
import Link from "next/link";

//  Timeform.js ReactJS 16.3+ component for apple-picker
//  by Dan McKeown http://danmckeown.info copyright 2018

import Timer from "./timer";

export default class Timeform extends Component {
  render() {
    return (
      <div id="basicComponentDiv">
        <Timer />
        <style jsx global>
          {`
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
            button {
              width: calc(5vw + 5px);
              height: 5vh;
              background-color: lightblue;
              border: yellow;
              margin-left: 5px;
            }
          `}
        </style>
      </div>
    );
  }
}
