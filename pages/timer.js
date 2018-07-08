import React, { Component } from "react";
import Link from "next/link";

//  miler.js starter ReactJS 16.3+ component for apple-picker
//  by Dan McKeown http://danmckeown.info copyright 2018

import Textframe from "./textframe";

import convertDate from "./convert-date";

const defaultDate = convertDate();

export default class Timer extends Component {
  state = { Ok: true, amountdate: defaultDate, amount: '', desc: '', payer: '', notes: ``, dest: '', emb: '', roundTrip: true, notes: 'null', org: 'lovebirdsconsulting', rate: '', shouldAR: false, prospect: null, prospectsArray: [] };

  constructor(props) {
    super(props);
    this.handleSubmitMilage = this.handleSubmitMilage.bind(this);
    this.updateAmount = this.updateAmount.bind(this);               
    this.updateDate = this.updateDate.bind(this);                
    this.updateDescription = this.updateDescription.bind(this);
    this.updateDest = this.updateDest.bind(this);
    this.updateEmb = this.updateEmb.bind(this);
    this.updateRate = this.updateRate.bind(this);
    this.updateARstatus = this.updateARstatus.bind(this);
    this.updateNOW = this.updateNOW.bind(this);
  }

  handleSubmitMilage(event) {
    console.log('Time sheet data: ' + this.state.amount + " date: " + this.state.amountdate + " description: " + this.state.desc);

    event.preventDefault();

    let dest = "/api/1/addtime/amount/" + this.state.amount + "/date/" + this.state.amountdate + "/client/" + this.state.emb + "/description/" + this.state.desc + "/notes/" + this.state.dest + "/org/" + this.state.org + "/rate/" + this.state.rate + "/clientid/" + this.state.prospect;
    let that = this;

    let total = Number(this.state.amount * this.state.rate);

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
        let dest2 = "/api/1/addreceivable/amount/" + total + "/date/" + that.state.amountdate + "/payee/" + that.state.emb + "/description/" + that.state.desc + "/notes/" + that.state.dest + "/org/" + that.state.org + "/client/" + that.state.prospect;
        //    /api/1/addreceivable/amount/:total/date/:paydate/payee/:payee/description/:desc/notes/:notes/org/:org

        console.log("shouldAR is " + that.state.shouldAR);
        if (that.state.shouldAR === true) {
          fetch(dest2, {})
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
  updateDescription(event) {
    console.log("updated description value: " + event.target.value)
    this.setState({ desc: event.target.value });
  }
  updateDest(event) {
    console.log("updated destination value: " + event.target.value)
    this.setState({ dest: event.target.value });
  }
  updateEmb(event) {
    console.log("updated embarkment point value: " + event.target.value)
    this.setState({ emb: event.target.value });
  }
  updateRate(event) {
    this.setState({ rate: event.target.value });
    console.log("updated rate value: " + event.target.rate)
  }
  updateARstatus(event) {
    console.log('running updateARstatus');
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    console.log('shouldAR is ' + value);
    this.setState({
      shouldAR: value
    });
  }
  updateNOW(event) {
    console.log("updated p value: " + event.target.value);
    this.setState({ prospect: event.target.value });
  }

  
  UNSAFE_componentWillMount() { }

  componentDidMount() {
    let that = this;
    let dest = "api/1/getclients/org/lovebirdsconsulting/limit/1000";
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
      });
  }

  render() {
    return (
      <div id="picker">
        <div className="pear-content">
          <section id="snapshot">
            <Textframe notData="9"></Textframe>
            <h2 id="snapshot">Enter Time Sheet Data</h2>
            <form id="expense">
              <section className="milage-form"><span className="input-span">Hours: </span><input id="input-amount" value={this.state.amount} onChange={this.updateAmount} /></section>
              {/* <section className="milage-form"><span className="input-span">Date: </span><input id="input-date" value={this.state.amountdate} onChange={this.updateDate} /></section> */}
              <section className="milage-form"><span className="input-span">Date: </span><input type="date" id="input-date" value={this.state.amountdate} onChange={this.updateDate} /></section>
              <section className="milage-form"><span className="input-span">Notes: </span><input id="input-notes" value={this.state.dest} onChange={this.updateDest} /></section>
              <section className="milage-form"><span className="input-span">Stakeholder: </span><input id="input-emb" value={this.state.emb} onChange={this.updateEmb} /></section>
              <section className="milage-form"><span className="input-span">Description: </span><input id="input-description" value={this.state.desc} onChange={this.updateDescription} /></section>
              <section className="milage-form"><span className="input-span">Rate (hourly $): </span><input id="input-description" value={this.state.rate} onChange={this.updateRate} /></section>
              <section><span>Create A/R?</span><input
                name="isGoing"
                type="checkbox"
                checked={this.state.shouldAR}
                onChange={this.updateARstatus} />
              </section>
              <section className="expense-form" id="dropdown">
                <span className="input-span">Client:
                  <select value={this.state.prospect} onChange={this.updateNOW}><option value={null}>none</option>
                    {this.state.prospectsArray.map(function (interVal) {
                      console.log("interVal.value.client: " + interVal.value.client);
                      return <option value={interVal.key}>{interVal.value.client} {interVal.value.date}</option>
                    })}
                  </select>
                </span>
              </section>
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
