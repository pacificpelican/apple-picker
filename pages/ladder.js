import React, { Component } from "react";
import Link from "next/link";

//  ladder.js ReactJS 16.3+ component for apple-picker
//  by Dan McKeown http://danmckeown.info copyright 2018

export default class Ladder extends Component {
  state = { Ok: true };

  constructor() {
    super();
  }

  UNSAFE_componentWillMount() {}

  componentDidMount() {}

  render() {
    return (
      <div id="ladder">
        <ul className="ladder-content">
          <li id="homelink"><a href="../../../../..">Home</a></li>
          <li id="file-link"><Link href="/file"><a>File</a></Link></li>
          <li id="file-link"><Link href="/edit"><a>Edit</a></Link></li>
          <li id="file-link"><Link href="/view"><a>View</a></Link></li>
          <li id="file-link"><Link href="/settings"><a>Settings</a></Link></li>
          <li id="file-link"><Link href="/help"><a>Help</a></Link></li>
        </ul>
        <style>
          {`
            div.pear-content {
              font-family: "Hack", "Fira Code", "Menlo", monospace;
            }
            ul.ladder-content li {
              display: inline-block;
              padding-right: 1rem;
            }
            `}
        </style>
      </div>
    );
  }
}
