import React, { Component } from "react";
import Link from "next/link";

//  textframe.js ReactJS 16.3+ component for apple-picker
//  by Dan McKeown http://danmckeown.info copyright 2018

import Homelink from "./homelink";

export default class Textframe extends Component {
  state = { Ok: true };

  constructor() {
    super();
  }

  reloadOnce() {
    console.log("about to reload");
    return window.location.reload();
    return false;
  }

  UNSAFE_componentWillMount() {}

  componentDidMount() {}

  render(props) {
    return (
      <div id="ladder">
        <ul className="ladder-content">
          <li id="homelink"><Homelink /></li>
          <li id="file-link"><a onClick={this.reloadOnce} href="#">Refresh()</a></li>
          <li id="file-link"><Link href="/edit">Edit</Link></li>
          <li id="file-link"><Link href="/view">View</Link></li>
          <li id="file-link"><Link href="/settings">Settings</Link></li>
          <li id="file-link"><Link href="/help">Help</Link></li>
        </ul>
        <section id="content-section">
        
        </section>
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
