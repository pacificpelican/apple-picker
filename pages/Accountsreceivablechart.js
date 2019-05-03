import React, { Component } from "react";
import Link from "next/link";

import Textframe from "./textframe";
import Accountsreceivablechartrow from "./Accountrecievablechartrow";

//  Accountsreceivableschart.js ReactJS 16.3+ component for apple-picker
//  by Dan McKeown http://danmckeown.info copyright 2018

export default class Accountsreceivableschart extends Component {
  state = { Ok: true, expeneseArray: [] };

  constructor() {
    super();
    this.doLookup = this.doLookup.bind(this);
  }

  doLookup() {
    let that = this;
    let dest = "api/1/getreceivables/org/lovebirdsconsulting/limit/10";
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
        that.setState({ expeneseArray: myReturn.reverse() });
      });
  }

  componentDidMount() {
    this.doLookup();
  }

  render() {
    return (
      <div id="basicComponentDiv">
        <Textframe />
        <div className="apple-picker-header">apple-picker _ A/R Data </div>
        <div id="data-container">
        <div id="dataHeader" className="dataZone"><span className="accountrecievable-date" key="date-header">date</span><span className="accountrecievable--amount" key="amount-header">amount</span><span className="accountrecievable--description" key="accountrecievable--header">description</span><span className="accountrecievable--payee" key="payee-header">debtor</span><span className="accountrecievable--notes" key="notes-header">notes</span></div>
          {this.state.expeneseArray.map(function (interVal) {
            console.log("interVal.value.amount: " + interVal.value.amount);
            return <Accountsreceivablechartrow interVal={interVal} />
          })}
        </div>
       
        <style jsx global>{`
            :root {
              --fonts-default: "Ubuntu", "Lucida Sans", "Segoe UI", "Roboto", sans-serif;
              --fonts-ui: "Hack", "Fira Code", "Menlo", monospace;
            }
            div.apple-picker-header {
              font-family: var(--fonts-default, "sans-serif");
            }
            div#data-container {
              font-family: var(--fonts-ui, "sans-serif");
            }
            div.dataZone {
              display: grid;
              grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
              grid-column-gap: 10px;
            }
            div#data-container span {
              background-color: #e8ebef;
              margin-top: 0.7rem;
              padding-left: 0.5rem;
              padding-top: 0.4rem;
              padding-bottom: 0.4rem;
            }
            div#data-container span:nth-child(2n+1) {
              background-color: #eff3f9;
            }
            div#data-container span:nth-child(3n) {
              background-color: #e8ebef;
            }
            div#dataHeader span {
              font-weight: bold;
            }
            `}</style>
      </div>
    );
  }
}
