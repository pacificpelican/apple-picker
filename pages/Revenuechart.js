import React, { Component } from "react";
import Link from "next/link";

import Textframe from "./textframe";
import Revenuechartrow from "./Revenuechartrow";

//  Revenuechart.js ReactJS 16.3+ component for apple-picker
//  by Dan McKeown http://danmckeown.info copyright 2018

export default class Revenuechart extends Component {
  state = { Ok: true, revenueArray: [] };

  constructor() {
    super();
  }

  componentDidMount() {
    let that = this;
    let dest = "http://localhost:3005/api/1/getrevenue/org/lovebirdsconsulting/limit/10";
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
        that.setState({ revenueArray: myReturn });
      });
  }

  render() {
    return (
      <div id="basicComponentDiv">
        <div className="apple-picker-header">apple-picker _ Revenue Data </div>
        <Textframe />
        <div id="data-container">
          {this.state.revenueArray.map(function (interVal) {
            console.log("interVal.value.amount: " + interVal.value.amount);
            return <Revenuechartrow interVal={interVal} />
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
            div.data-container {
              width: 800px;
            }
            `}</style>
      </div>
    );
  }
}
