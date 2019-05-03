import React, { Component } from "react";

//  miler.js starter ReactJS 16.3+ component for apple-picker
//  by Dan McKeown http://danmckeown.info copyright 2018

import Textframe from "./textframe";

import Orgname from "./Orgname";

const getDOMtext = function (inpSel = "span#orgName") {
  let elem = document.querySelector(inpSel);
  let dataset = elem.textContent;
  // alert(dataset);
  return dataset;
}

export default class Miler extends Component {
  state = { Ok: true, amountdate: '', amount: '', desc: '', payer: '', notes: null, dest: '', emb: '', roundTrip: true, org: 'null', ar: '0', receivablesArray: [] };

  constructor(props) {
    super(props);
    this.handleSubmitMilage = this.handleSubmitMilage.bind(this);
    this.updateAmount = this.updateAmount.bind(this);                // utilized in Miler
    this.updateDate = this.updateDate.bind(this);                     // utilized in Miler
    this.updateDescription = this.updateDescription.bind(this);       // utilized in Miler
    this.updateDest = this.updateDest.bind(this);                     // utilized in Miler
    this.updateEmb = this.updateEmb.bind(this);                      // utilized in Miler
    this.updateRound = this.updateRound.bind(this);                      // utilized in Miler
    this.updateap = this.updateap.bind(this);
  }

  handleSubmitMilage(event) {

    console.log('Milage data: ' + this.state.amount + " date: " + this.state.amountdate + " description: " + this.state.desc + " destination: " + this.state.dest);

    event.preventDefault();

    let dest = "/api/1/addmiles/amount/" + this.state.amount + "/date/" + this.state.amountdate + "/destination/" + this.state.dest + "/embarkment/" + this.state.emb + "/description/" + this.state.desc + "/roundtrip/" + this.state.round + "/notes/" + this.state.notes + "/org/" + this.state.org + "/clientid/" + this.state.ar;
    let that = this;

    fetch(dest, { method: 'post' })
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
  updateRound(event) {
    console.log("updated roundtrip value: " + event.target.value)
    this.setState({ roundTrip: event.target.value });
  }

  updateap(event) {
    console.log("updated ap: " + event.target.value)
    this.setState({ ar: event.target.value });
  }

  UNSAFE_componentWillMount() { }

  componentDidMount() {
    let that = this;
    let dest = "/api/1/getclients/org/altaredwood/limit/100";
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
        that.setState({ receivablesArray: myReturn });
        that.setState({ org: getDOMtext() });
      });
  }

  render() {
    return (
      <div id="picker">
        <div className="pear-content">
          <section id="snapshot">
            <Textframe notData="9"></Textframe>
            <div className="apple-picker-content">apple-picker _ Car Trip Entry </div>
            <h2 id="snapshot">Enter a Milage Estimate</h2>
            <form id="expense" onSubmit={this.handleSubmitMilage}>
              <section className="milage-form"><span className="input-span">Miles: </span><input required id="input-amount" value={this.state.amount} onChange={this.updateAmount} /></section>
              <section className="milage-form"><span className="input-span">Date: </span><input type="date" id="input-date" value={this.state.amountdate} onChange={this.updateDate} /></section>
              {/* <section className="milage-form"><span className="input-span">Date: </span><input id="input-date" value={this.state.amountdate} onChange={this.updateDate} /></section> */}
              <section className="milage-form"><span className="input-span">Destination: </span><input required id="input-description" value={this.state.dest} onChange={this.updateDest} /></section>
              <section className="milage-form"><span className="input-span">Embarkment Point: </span><input required id="input-description" value={this.state.emb} onChange={this.updateEmb} /></section>
              {/* <section className="milage-form"><span className="input-span">Round Trip?: </span><input type="radio" id="radioButton-roundTrip" value={this.state.roundTrip} onChange={this.updateRound} /></section> */}
              <section className="milage-form"><span className="input-span">Description: </span><input required id="input-description" value={this.state.desc} onChange={this.updateDescription} /></section>
              <section className="expense-form" id="dropdown">
                <span className="input-span">Client:
                  <select value={this.state.ar} onChange={this.updateap}><option value={null}>none</option>
                    {this.state.receivablesArray.map(function (interVal) {
                      console.log("interVal.value.client: " + interVal.value.client);
                      return <option value={interVal.value.locator}>{interVal.value.client} {interVal.value.date}</option>
                    })}
                  </select>
                </span>
              </section>
              <section className="milage-form"><span className="input-span"></span><input type="submit" value="add miles" id="submit-miles" /></section>
            </form>
          </section>
          <Orgname />
        </div>
        <style jsx>
          {`
            div.pear-content {
                font-family: "Hack", "Fira Code", "Menlo", monospace;
            }
            section.milage-form span.input-span {
              background-color: #eff4fc;
              display: inline-block;
              width: 135px;
            }
            section.milage-form input,
            section.milage-form select {
              margin-left: 12px;
            }
            `}
        </style>
      </div>
    );
  }
}
