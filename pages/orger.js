import React, { Component } from "react";
import Link from "next/link";

//  orger.js ReactJS 16.3+ component for apple-picker
//  by Dan McKeown http://danmckeown.info copyright 2018

import convertDate from "./convert-date";

const defaultDate = convertDate();

import Orgname from "./Orgname";

export default class Orger extends Component {
  state = { Ok: true, amountdate: defaultDate, amount: '', desc: '', payee: '', notes: '', pid: null, orgName: 'The Company' };

  constructor(props) {
    super(props);
    this.handleSubmitExpense = this.handleSubmitExpense.bind(this);
    this.updateDate = this.updateDate.bind(this);
    this.updatePayee = this.updatePayee.bind(this);
  }

  handleSubmitExpense(event) {
    console.log('Receivable data: ' + " date: " + this.state.amountdate + " org name: " + this.state.payee);
    //  http://localhost:3005/api/1/addexpense/amount/8/date/djm/payee/danco/description/0009/notes/9023j/org/283
    event.preventDefault();

    let dest = "/api/1/updateorg/date/" + this.state.amountdate + "/name/" + this.state.payee;
    //  let dest = "/api/1/addprospect/amount/" + this.state.amount + "/date/" + this.state.amountdate + "/client/" + this.state.payee + "/description/" + this.state.desc + "/notes/" + this.state.notes + "/org/" + this.state.org;
    let that = this;

    localStorage.setItem('org', this.state.payee);

    fetch(dest, {})
      .then(function (response) {
        if (response.ok) {
          console.log("response ok");
          return response.json();
        }
        throw new Error("Network did not respond.");
        return response.blob();
      })
      .then(function (myReturn) {
        console.log(myReturn);
      });
  }

  updateDate(event) {
    console.log("updated date value: " + event.target.value)
    this.setState({ amountdate: event.target.value });
  }

  updatePayee(event) {
    console.log("updated payee value: " + event.target.value)
    this.setState({ payee: event.target.value });
  }

  noop() {
    // do nothing
  }

  UNSAFE_componentWillMount() { }

  componentDidMount() { 
    
  }

  render() {
    return (
      <div id="picker">
        <div className="pear-content">
          <section id="snapshot">

            <h2 id="snapshot">Enter an Org Name</h2>
            <form id="expense" onSubmit={this.handleSubmitExpense}>
              <section className="expense-form"><span className="input-span">New Org Name: </span><input required id="payee-description" value={this.state.payee} onChange={this.updatePayee} /></section>
              <section className="expense-form"><span className="input-span">Date: </span><input type="date" id="input-date" value={this.state.amountdate} onChange={this.updateDate} /></section>
              <section className="expense-form"><span className="input-span"></span><input type="submit" value="add org name" id="submit-expenses" /></section>
            </form>
          </section>
          <Orgname />
        </div>
        <style jsx>{`
            div.pear-content {
                font-family: "Hack", "Fira Code", "Menlo", monospace;
            }
            span {
              line-height: 1.5;
            }
            section#org {
              visibility: hidden;
            }
            section.expense-form span.input-span {
              background-color: #eff4fc;
              display: inline-block;
              width: 135px;
            }
            section.expense-form input,
            section.expense-form select {
              margin-left: 12px;
            }
            `}</style>
      </div>
    );
  }
}
