import React, { Component } from "react";
import Link from "next/link";

//  pitcher.js ReactJS 16.3+ component for apple-picker
//  by Dan McKeown http://danmckeown.info copyright 2018

import Textframe from "./textframe";

import convertDate from "./convert-date";

const defaultDate = convertDate();

import Orgname from "./Orgname";

const getDOMtext = function(inpSel="span#orgName") {
  let elem = document.querySelector(inpSel);
  let dataset = elem.textContent;
  return dataset;
}

export default class Pitcher extends Component {
  state = { Ok: true, amountdate: defaultDate, amount: '', desc: '', payee: '', notes: '', pid: null, prospect: null, prospectsArray: [] };

  constructor(props) {
    super(props);
    this.handleSubmitExpense = this.handleSubmitExpense.bind(this);
    this.updateAmount = this.updateAmount.bind(this);
    this.updateDate = this.updateDate.bind(this);
    this.updateDescription = this.updateDescription.bind(this);
    this.updatePayee = this.updatePayee.bind(this);
    this.updateNotes = this.updateNotes.bind(this);

    this.updateNOW = this.updateNOW.bind(this);
  }

  handleSubmitExpense(event) {
    console.log('Receivable data: ' + this.state.amount + " date: " + this.state.amountdate + " description: " + this.state.desc + " payee: " + this.state.payee + " notes: " + this.state.notes);

    event.preventDefault();

    let dest = "/api/1/addpitch/amount/" + this.state.amount + "/date/" + this.state.amountdate + "/client/" + this.state.payee + "/description/" + this.state.desc + "/notes/" + this.state.notes + "/org/" + this.state.org + "/prospectid/" + this.state.prospect;
    let that = this;

    fetch(dest, {method: 'post'})
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

  updateAmount(event) {
    console.log("updated amount value: " + event.target.value)
    this.setState({ amount: event.target.value });
  }

  updateDate(event) {
    console.log("updated date value: " + event.target.value)
    this.setState({ amountdate: event.target.value });
  }

  updatePayee(event) {
    console.log("updated payee value: " + event.target.value)
    this.setState({ payee: event.target.value });
  }

  updateNotes(event) {
    console.log("updated notes value: " + event.target.value)
    this.setState({ notes: event.target.value });
  }

  updateDescription(event) {
    console.log("updated description value: " + event.target.value)
    this.setState({ desc: event.target.value });
  }

  updateNOW(event) {
    console.log("updated p value: " + event.target.value);
    this.setState({ prospect: event.target.value });
  }

  noop() {
    // do nothing
  }

  UNSAFE_componentWillMount() { }

  componentDidMount() {
    let that = this;
    let dest = "api/1/getprospects/org/lovebirdsconsulting/limit/1000";
    fetch(dest, {})
      .then(function (response) {
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
      .then(function (myReturn) {
        console.log(myReturn);
        that.setState({ prospectsArray: myReturn });
        that.setState({ org: getDOMtext() });
      });
  }

  render() {
    return (
      <div id="picker">
        <div className="pear-content">
          <section id="snapshot">
            <Textframe notData="9"></Textframe>
            <h2 id="snapshot">Enter a new Pitch</h2>
            <form id="expense" onSubmit={this.handleSubmitExpense}>
            <section className="expense-form"><span className="input-span">Audience: </span><input required id="payee-description" value={this.state.payee} onChange={this.updatePayee} /></section>
              <section className="expense-form"><span className="input-span">Company Market Cap: $</span><input required id="input-amount" value={this.state.amount} onChange={this.updateAmount} /></section>
              <section className="expense-form"><span className="input-span">Date: </span><input required type="date" id="input-date" value={this.state.amountdate} onChange={this.updateDate} /></section>
              <section className="expense-form"><span className="input-span">Description: </span><input required id="input-description" value={this.state.desc} onChange={this.updateDescription} /></section>
              <section className="expense-form"><span className="input-span">Notes: </span><br /><textarea required id="input-notes" value={this.state.notes} onChange={this.updateNotes} /></section>
              <section className="expense-form" id="dropdown">
                <span className="input-span">Prospect:</span>
                  <select value={this.state.prospect} onChange={this.updateNOW}><option value={null}>none</option>
                    {this.state.prospectsArray.map(function (interVal) {
                      console.log("interVal.value.prospect: " + interVal.value.prospect);
                      return <option value={interVal.value.locator}>{interVal.value.prospect} {interVal.value.date}</option>
                    })}
                  </select>
              </section>
              <section className="expense-form"><span className="input-span"></span><input type="submit" value="add pitch" id="submit-expenses" /></section>
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
