import React, { Component } from "react";
import Link from "next/link";

//  picker.js starter ReactJS 16.3+ component for apple-picker
//  by Dan McKeown http://danmckeown.info copyright 2018

export default class Picker extends Component {
  state = { Ok: true };

  constructor() {
    super();
  }

  UNSAFE_componentWillMount() {}

  componentDidMount() {}

  render() {
    return (
      <div id="picker">
        <div className="pear-content">
          <section id="snapshot">
            <h2 id="snapshot">Enter an Expense</h2>
            <form id="expense">
              <span className="input-span">Description: </span><input id="input-description" />
              <span className="input-span">Amount: $</span><input id="input-amount" />
              <span className="input-span">Date: </span><input id="input-date" />
            </form>
          </section>
        </div>
        <style jsx>
          {`
            div.pear-content {
                font-family: "Hack", "Fira Code", "Menlo", monospace;
            }
            `}
        </style>
      </div>
    );
  }
}
