import React, { Component } from "react";
import Link from "next/link";

//  Home.js ReactJS 16.3+ component for apple-picker
//  by Dan McKeown http://danmckeown.info copyright 2018

import Textframe from "./textframe";

export default class Homeß extends Component {
  state = { Ok: true, revenueTotal: Number(0) };

  constructor() {
    super();
    this.doLookupRevenues = this.doLookupRevenues.bind(this);
  }

  reloadOnce() {
    console.log("about to reload");
    return window.location.reload();
    return false;
  }

  doLookupRevenues() {
    let that = this;
    let dest =
      "http://localhost:3005/api/1/getrevenue/org/lovebirdsconsulting/limit/100";
    let rev = this.state.revenueTotal;
    fetch(dest, {})
      .then(function(response) {
        if (response.ok) {
          console.log("response 2 ok");
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
      .then(function(myReturn) {
        console.log(myReturn);
        let innerObject = myReturn[0].value;
        console.log(innerObject);
        // innerObject.forEach(element => {
        //   rev = rev + element.amount;
        // });

        // for (var o in innerObject) {
        //   console.log(o);
        //   if (o.hasOwnProperty('amount')) {
        //     console.log('adding to revenue total');
        //     rev = rev + Number(o.amount);
        //   }
        // }

        myReturn.map(function(interVal) {
          console.log(
            "interVal.value.amount: " + interVal.value.amount
          );
          rev = Number(rev) + Number(interVal.value.amount);
          // return (
          //   <option value={interVal.key}>
          //     {interVal.value.creditor} {interVal.value.date}
          //   </option>
          // );
        });
        
     //   rev = rev + 
        that.setState({ revenueTotal: Number(rev) });
      });
  }

  UNSAFE_componentWillMount() {
  //  this.doLookupRevenues();
  }

  componentDidMount() {
    this.doLookupRevenues();
  }

  render(props) {
    return (
      <div id="apple-picker-home">
        <Textframe />
        <section id="revTot">__
          <label>Total Revenues: </label>
          <span>{this.state.revenueTotal}</span>
        </section>
        <section id="content-section" />
        <style jsx>
          {`
            div.pear-content {
              font-family: "Hack", "Fira Code", "Menlo", monospace;
            }
            ul.ladder-content li {
              display: inline-block;
              padding-right: 1rem;
            }
            ul.ladder-content li {
              font-family: "Hack", "Fira Code", "Menlo", monospace;
            }
            `}
        </style>
      </div>
    );
  }
}
