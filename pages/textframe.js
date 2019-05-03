import React, { Component } from "react";
import Link from "next/link";

//  textframe.js ReactJS 16.3+ component for apple-picker
//  by Dan McKeown http://danmckeown.info copyright 2018

import Homelink from "./homelink";

export default class Textframe extends Component {
  reloadOnce() {
    console.log("about to reload");
    return window.location.reload();
    return false;
  }

  render(props) {
    return (
      <div id="ladder">
        <ul className="ladder-content">
          <li><p id="sym">🍎🚜</p></li>
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
            div#ladder {
              height: calc(20px + 15vh);
            }
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
            div#ladder {
              background: rgb(191,187,255);
              background: linear-gradient(90deg, rgba(191,187,255,0.7791317210477942) 0%, rgba(255,210,133,1) 64%, rgba(189,195,215,1) 74%);
              padding-block-start: calc(0.4vh + 1px);
              padding-block-end: calc(1ch);
              padding-inline-start: calc(3vh + 10px);
              padding-inline-end: calc(3vh + 10px);
              border-top-left-radius: calc(0.3rem);
            }
            a {
              color: inherit;
            }
            p#sym {
              font-size: calc(2.5rem);
            }
            `}
        </style>
      </div>
    );
  }
}
