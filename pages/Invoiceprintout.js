import React, { Component } from "react";
import Link from "next/link";

import Textframe from "./textframe";
import Accountsreceivablechartrow from "./Accountrecievablechartrow";

//  Invoicechart.js ReactJS 16.3+ component for apple-picker
//  by Dan McKeown http://danmckeown.info copyright 2018

export default class Invoicechart extends Component {
  state = { Ok: true, exArray: [Object.assign({})], amount: 0 };

  constructor() {
    super();
    this.doLookup = this.doLookup.bind(this);
  }

  doLookup(props) {
    let that = this;
  //  let dest = "api/1/getinvoices/org/lovebirdsconsulting/limit/100";
    let dest = "/api/1/getinvoice/org/anyorg/locator/" + this.props.id;
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
        that.setState({ exArray: myReturn });
      });
  }

  componentDidMount() {
    this.doLookup();
  }

  render(props) {
    return (
      <div id="basicComponentDiv">
        <div className="apple-picker-header">apple-picker _ Invoice </div>
        <Textframe />
        <div id="invoice">
          <b>Invoice ID: { this.props.id }</b>
        </div>
        <div id="data-container">
        <div id="dataHeader" className="dataZone"><span className="accountrecievable-date" key="date-header">date</span><span className="accountrecievable--amount" key="amount-header">amount</span><span className="accountrecievable--description" key="accountrecievable--header">description</span><span className="accountrecievable--payee" key="payee-header">debtor</span><span className="accountrecievable--notes" key="notes-header">notes</span></div>
           {//this.state.exArray.forEach(element => {
          //  console.log(element.amount);
            //  return <div>element.amount</div>;
          //  return <Accountsreceivablechartrow interVal={[element]} />
       //   return <div className="dataZone"><span className="accountrecievable-date" key={element.date}>{element.date}</span><span className="accountrecievable--amount" key={element.amount}>{element.amount}</span><span className="accountrecievable-description" key={element.description}>{element.description}</span><span className="accountrecievable--payee" key={element.debtor}>{element.debtor}</span><span className="accountrecievable-notes" key={element.notes}>{element.notes}</span></div>
       //    })
           }
         <div className="dataZone"><span className="accountrecievable-date" key={this.state.exArray.date}>{this.state.exArray.date}</span><span className="accountrecievable--amount" key={this.state.exArray.amount}>{this.state.exArray.amount}</span><span className="accountrecievable-description" key={this.state.exArray.description}>{this.state.exArray.description}</span><span className="accountrecievable--payee" key={this.state.exArray.debtor}>{this.state.exArray.debtor}</span><span className="accountrecievable-notes" key={this.state.exArray.notes}>{this.state.exArray.notes}</span></div>
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
