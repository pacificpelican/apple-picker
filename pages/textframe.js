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
          <li id="file-link"><Link href="/Simplewrite"><a>Create</a></Link></li>
          <li id="file-link"><Link href="/Simpleread"><a>View</a></Link></li>
          <li id="file-link"><Link href="/Settings"><a>Settings</a></Link></li>
          <li id="file-link"><Link href="/help"><a>Help</a></Link></li>
        </ul>
        <section id="content-section">
        
        </section>
        <style jsx>{`
            div.pear-content {
              font-family: 'Hack', 'Fira Code', 'Menlo', monospace;
            }
            ul.ladder-content li {
              display: inline-block;
              padding-right: 1rem;
            }
            ul.ladder-content li {
              font-family: 'Hack', 'Fira Code', 'Menlo', monospace;
            }
            `}
        </style>
      </div>
    );
  }
}
