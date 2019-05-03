import React, { Component } from "react";

//  homelink.js ReactJS 16.3+ component for apple-picker
//  by Dan McKeown http://danmckeown.info copyright 2018

export default class Homelink extends Component {
  state = { Ok: true };

  render() {
    return (
      <span className="home-link">
        <a href="../../../../../..">Home</a>
        <style jsx>
          {`
            div.home-link {
                font-family: "Hack", "Fira Code", "Menlo", monospace;
            }
            a {
              color: inherit;
            }
            `}
        </style>
      </span>
    );
  }
}
