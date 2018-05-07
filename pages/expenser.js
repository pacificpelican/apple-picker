import React, { Component } from "react";
import Link from "next/link";

//  expenser.js ReactJS 16.3+ component for apple-picker
//  by Dan McKeown http://danmckeown.info copyright 2018

import Textframe from "./textframe";

export default class Expenser extends Component {
  state = { Ok: true };

  constructor() {
    super();
  }

  UNSAFE_componentWillMount() { }

  componentDidMount() { }

  render() {
    return (
      <div id="picker">
        <div className="pear-content">
          <section id="snapshot">
            <Textframe notData="9"></Textframe>
            <h2 id="snapshot">Enter an Expense</h2>
            <form id="expense">
              <section className="expense-form"><span className="input-span">Amount: $</span><input id="input-amount" /></section>
              <section className="expense-form"><span className="input-span">Date: </span><input type="date" id="input-date" /></section>
              <section className="expense-form"><span className="input-span">Payed To: </span><input id="payee-description" /></section>
              <section className="expense-form"><span className="input-span">Description: </span><input id="input-description" /></section>
              <section className="expense-form"><span className="input-span">Notes: </span><input id="input-notes" /></section>
              <section className="expense-form"><span className="input-span">Org: </span><input type="radio" id="radioButton-roundTrip" /></section>
              <section className="expense-form"><span className="input-span"></span><input type="submit" value="add expense" id="submit-expenses" /></section>
            </form>
          </section>
        </div>
        <style>
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
