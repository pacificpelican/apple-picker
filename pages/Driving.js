import React, { Component } from "react";
import Link from "next/link";

//  Driving.js ReactJS 16.3+ component for apple-picker
//  by Dan McKeown http://danmckeown.info copyright 2018

import Textframe from "./textframe";

export default class Driving extends Component {
  state = { Ok: true, revenueTotal: Number(0), milesArray: [] };

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
      "/api/1/getmiles/org/org/limit/10000";
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

        let innerObject;
        if (myReturn.length > 1) {
          innerObject = myReturn[0].value;
        }
        console.log(innerObject);

        let milesArray = [];

        myReturn.map(function(interVal) {
          console.log(
            "interVal.value.miles: " + interVal.value.miles
          );
          milesArray.push(Number(interVal.value.miles));
          rev = Number(rev) + Number(interVal.value.miles);
      
        });
        
        that.setState({ revenueTotal: Number(rev) });
        that.setState({ milesArray: milesArray});
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
        <section className="totalSection" id="milesTot">__
          <label>Total Miles: </label>
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
