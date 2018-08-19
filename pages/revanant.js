import React, { Component } from "react";
import Link from "next/link";

//  revenant.js ReactJS 16.3+ component for apple-picker
//  by Dan McKeown http://danmckeown.info copyright 2018

import Textframe from "./textframe";

import convertDate from "./convert-date";

const defaultDate = convertDate();

import Orgname from "./Orgname";

const getDOMtext = function(inpSel="span#orgName") {
  let elem = document.querySelector(inpSel);
  let dataset = elem.textContent;
  // alert(dataset);
  return dataset;
}

export default class Revenant extends Component {
  state = {
    Ok: true,
    amountdate: defaultDate,
    amount: "",
    desc: "",
    payer: "",
    notes: ``,
    ar: null,
    receivablesArray: [],
    invoicesArray: [],
    iState: null
  };

  constructor(props) {
    super(props);
    this.handleSubmitExpense = this.handleSubmitExpense.bind(this);
    this.updateAmount = this.updateAmount.bind(this);
    this.updateDate = this.updateDate.bind(this);
    this.updateDescription = this.updateDescription.bind(this);
    this.updatePayer = this.updatePayer.bind(this);
    this.updateNotes = this.updateNotes.bind(this);
    this.updateap = this.updateap.bind(this);
    this.updatei = this.updatei.bind(this);
  }

  handleSubmitExpense(event) {
    console.log(
      "Revenue data: " +
        this.state.amount +
        " date: " +
        this.state.amountdate +
        " description: " +
        this.state.desc +
        " payer: " +
        this.state.payer +
        " notes: " +
        this.state.notes
    );
    /////  http://localhost:3005/api/1/addexpense/amount/8/date/djm/payer/danco/description/0009/notes/9023j/org/283
    event.preventDefault();

    let dest =
      "/api/1/addrevenue/amount/" +
      this.state.amount +
      "/date/" +
      this.state.amountdate +
      "/payer/" +
      this.state.payer +
      "/description/" +
      this.state.desc +
      "/notes/" +
      this.state.notes +
      "/org/" +
      this.state.org +
      /arid/ +
      this.state.ar +
      /invid/ +
      this.state.iState;

    let that = this;

    fetch(dest, {})
      .then(function(response) {
        if (response.ok) {
          console.log("response ok");
          return response.json();
        }
        throw new Error("Network did not respond.");
        return response.blob();
      })
      .then(function(myReturn) {
        console.log(myReturn);
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

  updatePayer(event) {
    console.log("updated payer value: " + event.target.value);
    this.setState({ payer: event.target.value });
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

  updatei(event) {
    console.log("updated iState: " + event.target.value);
    this.setState({ iState: event.target.value });
  }

  noop() {
    // do nothing
  }

  componentDidMount() {
    let that = this;

    let dest2 = "api/1/getreceivables/org/lovebirdsconsulting/limit/1000";
    let dest = "api/1/getinvoices/org/lovebirdsconsulting/limit/1000";
    fetch(dest, {})
      .then(function(response) {
        if (response.ok) {
          return response.json();
        }
        return response.blob();
      })
      .then(function(myReturn) {
        console.log(myReturn);

        that.setState({ invoicesArray: myReturn });
        fetch(dest2, {})
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
          .then(function(myNewReturn) {
            console.log(myNewReturn);
            
            that.setState({ receivablesArray: myNewReturn });
            that.setState({ org: getDOMtext() });
          });
      });
  }

  render() {
    return (
      <div id="picker">
        <div className="pear-content">
          <section id="snapshot">
            <Textframe notData="9" />
            <h2 id="snapshot">Enter a Payment</h2>
            <form id="expense" onSubmit={this.handleSubmitExpense}>
              <section className="revenue-form">
                <span className="input-span">Amount: $</span>
                <input
                  required
                  id="input-amount"
                  value={this.state.amount}
                  onChange={this.updateAmount}
                />
              </section>
              <section className="revenue-form">
                <span className="input-span-date">Date: </span>
                <input
                  type="date"
                  id="input-date"
                  value={this.state.amountdate}
                  onChange={this.updateDate}
                />
              </section>
              <section className="revenue-form">
                <span className="input-span">Received From: </span>
                <input
                  required
                  id="payer-description"
                  value={this.state.payer}
                  onChange={this.updatePayer}
                />
              </section>
              <section className="revenue-form">
                <span className="input-span">Description: </span>
                <input
                  required
                  id="input-description"
                  value={this.state.desc}
                  onChange={this.updateDescription}
                />
              </section>
              <section className="revenue-form">
                <span className="input-span">Notes: </span>
                <input
                  required
                  id="input-notes"
                  value={this.state.notes}
                  onChange={this.updateNotes}
                />
              </section>

              <section className="revenue-form" id="dropdown">
                <span className="input-span">A/R:</span>
                <select value={this.state.ar} onChange={this.updateap}>
                  <option value={null}>none</option>
                  {this.state.receivablesArray.map(function(interVal) {
                    console.log(
                      "interVal.value.debtor: " + interVal.value.debtor
                    );
                    return (
                      <option value={interVal.value.locator}>
                        {interVal.value.debtor} {interVal.value.date}
                      </option>
                    );
                  })}
                </select>
              </section>

              <section className="revenue-form" id="dropdown2">
                <span className="input-span">Invoice:</span>
                <select value={this.state.iState} onChange={this.updatei}>
                  <option value={null}>none</option>
                  {this.state.invoicesArray.map(function(interVal2) {
                    console.log(
                      "interVal2.value.debtor: " + interVal2.value.debtor
                    );
                    return (
                      <option value={interVal2.value.invoiceLocator}>
                        {interVal2.value.debtor} {interVal2.value.date}
                      </option>
                    );
                  })}
                </select>
              </section>

              <section className="revenue-form">
                <span className="input-span" />
                <input type="submit" value="add revenue" id="submit-expenses" />
              </section>
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
            section.revenue-form span.input-span {
              background-color: #eff4fc;
              display: inline-block;
              width: 135px;
            }
            section.revenue-form input, section.revenue-form select {
              margin-left: 12px;
            }
            `}</style>
      </div>
    );
  }
}
