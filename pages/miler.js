import React, { Component } from "react";
import Link from "next/link";

//  miler.js starter ReactJS 16.3+ component for apple-picker
//  by Dan McKeown http://danmckeown.info copyright 2018

import Textframe from "./textframe";
import Ladder from "./ladder";

export default class Miler extends Component {
  state = { Ok: true, amountdate: new Date(), amount: '', desc: '', payer: '', notes: ``, dest: '', emb: '', roundTrip: true };

  constructor(props) {
    super(props);
    this.handleSubmitExpense = this.handleSubmitExpense.bind(this);
    this.updateAmount = this.updateAmount.bind(this);                // utilized in Miler
    this.updateDate = this.updateDate.bind(this);                     // utilized in Miler
    this.updateDescription = this.updateDescription.bind(this);       // utilized in Miler
    // this.updatePayer = this.updatePayer.bind(this);
    // this.updateNotes = this.updateNotes.bind(this);

    this.updateDest = this.updateDest.bind(this);                     // utilized in Miler
    this.updateEmb = this.updateEmb.bind(this);                      // utilized in Miler
    this.updateRound = this.updateRound.bind(this);                      // utilized in Miler
  }

  handleSubmitExpense() {}
  updateAmount() {
    console.log("updated amount value: " + event.target.value)
    this.setState({amount: event.target.value});
  }
  updateDate() {}
  updateDescription() {}
  updateDest() {}
  updateEmb() {}
  updateRound() {}


  UNSAFE_componentWillMount() { }

  componentDidMount() { }

  render() {
    return (
      <div id="picker">
        <div className="pear-content">
          <section id="snapshot">
            <Textframe notData="9"></Textframe>
            <h2 id="snapshot">Enter a Milage Estimate</h2>
            <form id="expense">
              <section className="milage-form"><span className="input-span">Miles: </span><input id="input-amount" value={this.state.amount} onChange={this.updateAmount} /></section>
              <section className="milage-form"><span className="input-span">Date: </span><input id="input-date" value={this.state.amountdate} onChange={this.updateDate} /></section>
              <section className="milage-form"><span className="input-span">Destination: </span><input id="input-description" value={this.state.dest} onChange={this.updateDest} /></section>
              <section className="milage-form"><span className="input-span">Embarkment Point: </span><input id="input-description" value={this.state.emb} onChange={this.updateEmb} /></section>
              <section className="milage-form"><span className="input-span">Round Trip?: </span><input type="radio" id="radioButton-roundTrip" value={this.state.roundTrip} onChange={this.updateRound} /></section>
              <section className="milage-form"><span className="input-span">Description: </span><input id="input-description" value={this.state.desc} onChange={this.updateDescription} /></section>
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
