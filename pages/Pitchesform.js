import React, { Component } from "react";
import Link from "next/link";

//  Pitchesform.js ReactJS 16.3+ component for apple-picker
//  by Dan McKeown http://danmckeown.info copyright 2018

import Pitcher from "./pitcher";

export default class Pitchesform extends Component {
  state = { Ok: true };

  constructor() {
    super();
  }

  UNSAFE_componentWillMount() {}

  componentDidMount() {}

  render() {
    return (
      <div id="basicComponentDiv">
        <div className="apple-picker-header">apple-picker _ Pitch Tracking </div>
        <Pitcher />
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
