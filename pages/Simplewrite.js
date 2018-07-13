import React, { Component } from "react";
import Link from "next/link";

import Textframe from "./textframe";
import Dataentry from "./dataentry";

//  Simplewrite.js ReactJS 16.3+ component for apple-picker
//  by Dan McKeown http://danmckeown.info copyright 2018

export default class Simplewrite extends Component {
  state = { Ok: true, expeneseArray: [] };

  constructor() {
    super();
  }

  componentDidMount() {

  }

  render() {
    return (
      <div id="basicComponentDiv">
        <Textframe />
        <article id="no-settings-message">
          <span id="no-settings">Add Data:</span>
          <Dataentry />
        </article>

        <style jsx global>{`
          :root {
            --fonts-default: "Ubuntu", "Lucida Sans", "Segoe UI", "Roboto",
              sans-serif;
            --fonts-ui: "Hack", "Fira Code", "Menlo", monospace;
          }
          article#no-settings-message {
            font-family: "Inter UI", "Fira Code", "Hack", Menlo, monospace;
          }
          div.apple-picker-header {
            font-family: var(--fonts-default, "sans-serif");
          }
          div#data-container {
            font-family: var(--fonts-ui, "sans-serif");
          }
          div.dataZone {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
            grid-column-gap: 10px;
          }
          div#data-container span {
            background-color: #e8ebef;
            margin-top: 0.7rem;
            padding-left: 0.5rem;
            padding-top: 0.4rem;
            padding-bottom: 0.4rem;
          }
          div#data-container span:nth-child(2n + 1) {
            background-color: #eff3f9;
          }
          div#data-container span:nth-child(3n) {
            background-color: #e8ebef;
          }
          div#dataHeader span {
            font-weight: bold;
          }
        `}</style>
      </div>
    );
  }
}
