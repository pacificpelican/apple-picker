import React, { Component } from "react";
import Link from "next/link";

//  expenser.js ReactJS 16.3+ component for apple-picker
//  by Dan McKeown http://danmckeown.info copyright 2018

import Textframe from "./textframe";

export default class Expenser extends Component {
  state = { Ok: true, amountdate: new Date(), amount: '', desc: '' };

  constructor(props) {
    super(props);
    this.handleSubmitExpense = this.handleSubmitExpense.bind(this);
    this.updateAmount = this.updateAmount.bind(this);
    this.updateDate = this.updateDate.bind(this);
    this.updateDescription = this.updateDescription.bind(this);
  }

  handleSubmitExpense(event) {
    alert('Expense data: ' + this.state.amount + " date: " + this.state.amountdate + " description: " + this.state.desc);
    event.preventDefault();
  }

  updateAmount(event) {
    console.log("submitted amount value: " + event.target.value)
    this.setState({amount: event.target.value});
  }

  updateDate(event) {
    console.log("submitted date value: " + event.target.value)
    this.setState({amountdate: event.target.value});
  }

  updateDescription(event) {
    console.log("submitted description value: " + event.target.value)
    this.setState({desc: event.target.value});
  }


  noop() {
    // do nothing
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
            <form id="expense" onSubmit={this.handleSubmitExpense}>
              <section className="expense-form"><span className="input-span">Amount: $</span><input id="input-amount" value={this.state.amount} onChange={this.updateAmount} /></section>
              <section className="expense-form"><span className="input-span">Date: </span><input type="date" id="input-date" value={this.state.amountdate} onChange={this.updateDate} /></section>
              <section className="expense-form"><span className="input-span">Payed To: </span><input id="payee-description"  /></section>
              <section className="expense-form"><span className="input-span">Description: </span><input id="input-description"  value={this.state.desc} onChange={this.updateDescription} /></section>
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
