import React, { Component } from "react";

//  Home.js ReactJS 16.3+ component for apple-picker
//  by Dan McKeown http://danmckeown.info copyright 2018

import Textframe from "./textframe";

//  import Totals from "./Totals";

export default class Home extends Component {
  state = { Ok: true };

  constructor() {
    super();

  }

  reloadOnce() {
    console.log("about to reload");
    return window.location.reload();
    return false;
  }

  render(props) {
    return (
      <div id="apple-picker-home">
        <Textframe />
        <h1 id="applePicker"><a href="https://djmblog.com/page/apple-picker">Apple Picker</a></h1>
        <h4 id="accounting">accounting software from <a id="alta" href="http://altaredwood.work">AltaRedwood.work</a></h4>
        <aside id="totals"><a href="/Desk" className="warning">View Data</a></aside>
        <ul id="total-links">
          <li>
            <a href="/Expense">Expense</a>
          </li>
          <li>
            <a href="/Revenue">Revenue</a>
          </li>
          <li>
            <a href="/Time">Time</a>
          </li>
          <li>
            <a href="/Driving">Driving</a>
          </li>
        </ul>
        <section id="content-section" />
        <style jsx>
          {`
            div.pear-content {
              font-family: 'Hack', 'Fira Code', 'Menlo', monospace;
            }
            ul.ladder-content li {
              display: inline-block;
              padding-right: 1rem;
            }
            ul.ladder-content li, aside#totals {
              font-family: 'Hack', 'Fira Code', 'Menlo', monospace;
            }
            h1#applePicker, h4#accounting, aside#totals a, ul#total-links li {
              font-family: 'Lato', 'Lucida Sans', 'Open Sans', sans-serif;
            }
            .warning {
              color: red;
              text-decoration: none;
            }
            h1#applePicker, h1#applePicker a, a#alta {
              text-decoration: none;
              color: black;
            }
            `}
        </style>
      </div>
    );
  }
}
