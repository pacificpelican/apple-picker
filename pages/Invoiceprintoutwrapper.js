import React, { Component } from "react";
import Link from "next/link";

import Invoiceprintout from "./Invoiceprintout";

//  Invoicechart.js ReactJS 16.3+ component for apple-picker
//  by Dan McKeown http://danmckeown.info copyright 2018

export default class Invoicechart extends Component {
  state = { Ok: true };

  constructor() {
    super();
  }

  componentDidMount() {
    console.log("this.props.invoicetracker " + this.props.invoicetracker);
  }

  render(props) {
    // let printoutid = "1975177";
    // if (this.props.invoicetracker) {
    //   printoutid = this.props.invoicetracker;
    // }
    return (
      <div id="basicComponentDiv">
       
        <div id="invoice">
          <Invoiceprintout invoicetracker={this.props.invoicetracker} />
        </div>
       
        <style jsx global>{`
           
            `}</style>
      </div>
    );
  }
}
