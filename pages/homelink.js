import React, { Component } from "react";
import Link from "next/link";

//  homelink.js ReactJS 16.3+ component for apple-picker
//  by Dan McKeown http://danmckeown.info copyright 2018

export default class Homelink extends Component {
  state = { Ok: true };

  constructor() {
    super();
  }

  UNSAFE_componentWillMount() {}

  componentDidMount() {}

  render() {
    return (
      <span className="home-link">
        <a href="../../../../../..">Home</a>
        <style>
          {`
            div.home-link {
                font-family: "Hack", "Fira Code", "Menlo", monospace;
            }
            `}
        </style>
      </span>
    );
  }
}
