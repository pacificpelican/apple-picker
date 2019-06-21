import React, { Component } from "react";

import Textframe from "./textframe";
import Expensechartrow from "./Expensechartrow";

import Spreadsheet from "./Spreadsheet";

//  withChart.js ReactJS 16.8+ higher-order component for apple-picker
//  by Dan McKeown http://danmckeown.info copyright 2019

export default function withChart(WrappedComponent, selectData, apiURL) {
  return class Expensechart extends Component {
    state = { Ok: true, expeneseArray: [] };

    constructor() {
      super();
      this.doLookupExpenses = this.doLookupExpenses.bind(this);
    }

    doLookupExpenses() {
      let that = this;
      let dest = apiURL;
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
      this.doLookupExpenses();
    }

    render() {
      return (
        <div id="basicComponentDiv">
          <Textframe />
          <div className="apple-picker-header">apple-picker _ Expense Data </div>
          <div id="data-container">
           
            <Spreadsheet dbdataArr={this.state.expeneseArray} table={this.state.userObjectAsk} store={this.state.userDBrequest} />
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
  };
}
