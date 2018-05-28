import React, { Component } from "react";
import Link from "next/link";

import Textframe from "./textframe";

//  Expensechart.js ReactJS 16.3+ component for apple-picker
//  by Dan McKeown http://danmckeown.info copyright 2018

export default class Expensechart extends Component {
  state = { Ok: true, expeneseArray: [] };

  constructor() {
    super();
  }

  componentDidMount() {
    let that = this;
    let dest = "http://localhost:3005/api/1/getexpenses/org/lovebirdsconsulting/limit/10";
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
        that.setState({ expeneseArray: myReturn });
      });
  }

  render() {
    return (
      <div id="basicComponentDiv">
        <div className="apple-picker-header">apple-picker _ Expense Data </div>
        <Textframe />
        <div id="data-container">
        {this.state.expeneseArray.map(function (interVal) {
          console.log("interVal.value.amount: " + interVal.value.amount);
            return <div className="dataZone"><span className="expense-date" key={interVal.value.date}>{interVal.value.date}</span><span className="expense-amount" key={interVal.value.amount}>{interVal.value.amount}</span><span className="expense-description" key={interVal.value.description}>{interVal.value.description}</span><span className="expense-payee" key={interVal.value.payee}>{interVal.value.payee}</span><span className="expense-notes" key={interVal.value.notes}>{interVal.value.notes}</span></div>
          })}

        </div>
       
        <style jsx>{`
            :root {
              --fonts-default: "Ubuntu", "Lucida Sans", "Segoe UI", "Roboto", sans-serif;
              --fonts-ui: "Hack", "Fira Code", "Menlo", monospace;
            }
            div.apple-picker-header {
              font-family: var(--fonts-default, "sans-serif");
            }
            div.apple-picker-content {
              font-family: var(--fonts-ui, "sans-serif");
            }
            div.dataZone {
              display: grid;
              grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
              grid-column-gap: 10px;
            }
            div.data-container {
              width: 800px;
            }
            `}</style>
      </div>
    );
  }
}
