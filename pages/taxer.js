import React, { Component } from "react";
import Link from "next/link";

//  revenant.js ReactJS 16.3+ component for apple-picker
//  by Dan McKeown http://danmckeown.info copyright 2018

import Textframe from "./textframe";
import convertDate from "./convert-date";

const defaultDate = convertDate();

export default class Revenant extends Component {
  state = {
    Ok: true,
    amountdate: defaultDate,
    amount: "",
    desc: "",
    payee: "",
    notes: "",
    ar: null,
    receivablesArray: []
  };

  constructor(props) {
    super(props);
    this.handleSubmitExpense = this.handleSubmitExpense.bind(this);
    this.updateAmount = this.updateAmount.bind(this);
    this.updateDate = this.updateDate.bind(this);
    this.updateDescription = this.updateDescription.bind(this);
    this.updatePayee = this.updatePayee.bind(this);
    this.updateNotes = this.updateNotes.bind(this);
    this.updateap = this.updateap.bind(this);
  }

  handleSubmitExpense(event) {
    console.log(
      "Expense data: " +
        this.state.amount +
        " date: " +
        this.state.amountdate +
        " description: " +
        this.state.desc +
        " payee: " +
        this.state.payee +
        " notes: " +
        this.state.notes
    );
    //  http://localhost:3005/api/1/addexpense/amount/8/date/djm/payee/danco/description/0009/notes/9023j/org/283
    event.preventDefault();

    let dest =
      "/api/1/addtax/amount/" +
      this.state.amount +
      "/date/" +
      this.state.amountdate +
      "/payee/" +
      this.state.payee +
      "/description/" +
      this.state.desc +
      "/notes/" +
      this.state.notes +
      "/org/" +
      this.state.org +
      "/apid/" +
      this.state.ar;
    let that = this;

    fetch(dest, {})
      .then(function(response) {
        if (response.ok) {
          console.log("response ok");
          // console.log(response.json);
          // for (var e in response.json) {
          //   console.log(e.toString());
          // }
          // console.log(response.text);
          return response.json();
        }
        throw new Error("Network did not respond.");
        return response.blob();
      })
      .then(function(myReturn) {
        console.log(myReturn);

        //  that.setState({ pricesAndCaps: oldArr });
      });
  }

  updateAmount(event) {
    console.log("updated amount value: " + event.target.value);
    this.setState({ amount: event.target.value });
  }

  updateDate(event) {
    console.log("updated date value: " + event.target.value);
    this.setState({ amountdate: event.target.value });
  }

  updatePayee(event) {
    console.log("updated payee value: " + event.target.value);
    this.setState({ payee: event.target.value });
  }

  updateNotes(event) {
    console.log("updated notes value: " + event.target.value);
    this.setState({ notes: event.target.value });
  }

  updateDescription(event) {
    console.log("updated description value: " + event.target.value);
    this.setState({ desc: event.target.value });
  }

  updateap(event) {
    console.log("updated ap: " + event.target.value);
    this.setState({ ar: event.target.value });
  }

  noop() {
    // do nothing
  }

  UNSAFE_componentWillMount() {}

  componentDidMount() {
    let that = this;
    let dest = "api/1/getpayables/org/lovebirdsconsulting/limit/1000";
    fetch(dest, {})
      .then(function(response) {
        if (response.ok) {
          console.log("response ok");
          console.log(response.json);
          for (var e in response.json) {
            console.log(e.toString());
          }
          console.log(response.text);
          return response.json();
        }
        throw new Error("Network did not respond.");
        return response.blob();
      })
      .then(function(myReturn) {
        console.log(myReturn);
        that.setState({ receivablesArray: myReturn });
      });
  }

  render() {
    return (
      <div id="picker">
        <div className="pear-content">
          <section id="snapshot">
            <Textframe notData="9" />
            <h2 id="snapshot">Enter a Tax Payment</h2>
            <form id="expense" onSubmit={this.handleSubmitExpense}>
              <section className="expense-form">
                <span className="input-span">Amount: $</span>
                <input
                  required
                  id="input-amount"
                  value={this.state.amount}
                  onChange={this.updateAmount}
                />
              </section>
              <section className="expense-form">
                <span className="input-span">Date: </span>
                <input
                  type="date"
                  id="input-date"
                  value={this.state.amountdate}
                  onChange={this.updateDate}
                />
              </section>
              <section className="expense-form">
                <span className="input-span">Payed To: </span>
                <input
                  required
                  id="payee-description"
                  value={this.state.payee}
                  onChange={this.updatePayee}
                />
              </section>
              <section className="expense-form">
                <span className="input-span">Description: </span>
                <input
                  id="input-description"
                  value={this.state.desc}
                  onChange={this.updateDescription}
                />
              </section>
              <section className="expense-form">
                <span className="input-span">Notes: </span>
                <input
                  id="input-notes"
                  value={this.state.notes}
                  onChange={this.updateNotes}
                />
              </section>
              {/* <section className="expense-form" id="org"><span className="input-span">Org: </span><input type="radio" id="radioButton-roundTrip" /></section> */}
              <section className="expense-form" id="dropdown">
                <span className="input-span">A/P:</span>
                <select value={this.state.ar} onChange={this.updateap}>
                  <option value={null}>none</option>
                  {this.state.receivablesArray.map(function(interVal) {
                    console.log(
                      "interVal.value.creditor: " + interVal.value.creditor
                    );
                    return (
                      <option value={interVal.key}>
                        {interVal.value.creditor} {interVal.value.date}
                      </option>
                    );
                  })}
                </select>
              </section>
              <section className="expense-form">
                <span className="input-span" />
                <input type="submit" value="add expense" id="submit-expenses" />
              </section>
            </form>
          </section>
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
