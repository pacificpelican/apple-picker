import React, { Component } from "react";
import Link from "next/link";

//  miler.js starter ReactJS 16.3+ component for apple-picker
//  by Dan McKeown http://danmckeown.info copyright 2018

import Textframe from "./textframe";

export default class Timer extends Component {
  state = { Ok: true, amountdate: new Date(), amount: '', desc: '', payer: '', notes: ``, dest: '', emb: '', roundTrip: true, notes: 'null', org: 'lovebirdsconsulting', rate: '' };

  constructor(props) {
    super(props);
    this.handleSubmitMilage = this.handleSubmitMilage.bind(this);
    this.updateAmount = this.updateAmount.bind(this);                // utilized in Miler
    this.updateDate = this.updateDate.bind(this);                     // utilized in Miler
    this.updateDescription = this.updateDescription.bind(this);       // utilized in Miler
    // this.updatePayer = this.updatePayer.bind(this);
    // this.updateNotes = this.updateNotes.bind(this);

    this.updateDest = this.updateDest.bind(this);                     // utilized in Miler
    this.updateEmb = this.updateEmb.bind(this);                      // utilized in Miler
    this.updateRate = this.updateRate.bind(this);
  //  this.updateRound = this.updateRound.bind(this);                      // utilized in Miler
  }

  handleSubmitMilage(event) {
  //  window.alert();
    console.log('Time sheet data: ' + this.state.amount + " date: " + this.state.amountdate + " description: " + this.state.desc);
   
    event.preventDefault();
  
      let dest = "/api/1/addtime/amount/" + this.state.amount + "/date/" + this.state.amountdate + "/client/" + this.state.emb + "/description/" + this.state.desc + "/notes/" + this.state.dest + "/org/" + this.state.org + "/rate/" + this.state.rate;
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
    console.log("updated amount value: " + event.target.value)
    this.setState({amount: event.target.value});
  }
  updateDate(event) {
    console.log("updated date value: " + event.target.value)
    this.setState({amountdate: event.target.value});
  }
  updateDescription(event) {
    console.log("updated description value: " + event.target.value)
    this.setState({desc: event.target.value});
  }
  updateDest(event) {
    console.log("updated destination value: " + event.target.value)
    this.setState({dest: event.target.value});
  }
  updateEmb(event) {
    console.log("updated embarkment point value: " + event.target.value)
    this.setState({emb: event.target.value});
  }
  updateRate(event) {
    this.setState({rate: event.target.value});
    console.log("updated rate value: " + event.target.rate)
  }
  // updateRound(event) {
  //   console.log("updated roundtrip value: " + event.target.value)
  //   this.setState({roundTrip: event.target.value});
  // }

  UNSAFE_componentWillMount() { }

  componentDidMount() { }

  render() {
    return (
      <div id="picker">
        <div className="pear-content">
          <section id="snapshot">
            <Textframe notData="9"></Textframe>
            <h2 id="snapshot">Enter Time Sheet Data</h2>
            <form id="expense">
              <section className="milage-form"><span className="input-span">Hours: </span><input id="input-amount" value={this.state.amount} onChange={this.updateAmount} /></section>
              <section className="milage-form"><span className="input-span">Date: </span><input id="input-date" value={this.state.amountdate} onChange={this.updateDate} /></section>
              <section className="milage-form"><span className="input-span">Notes: </span><input id="input-notes" value={this.state.dest} onChange={this.updateDest} /></section>
              <section className="milage-form"><span className="input-span">Client: </span><input id="input-emb" value={this.state.emb} onChange={this.updateEmb} /></section>

              <section className="milage-form"><span className="input-span">Description: </span><input id="input-description" value={this.state.desc} onChange={this.updateDescription} /></section>
              <section className="milage-form"><span className="input-span">Rate (hourly $): </span><input id="input-description" value={this.state.rate} onChange={this.updateRate} /></section>
              <section className="milage-form"><span className="input-span"></span><input type="submit" value="add time" id="submit-miles" onClick={this.handleSubmitMilage} /></section>
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
