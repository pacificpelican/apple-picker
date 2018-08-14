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

  }

  render(props) {
    return (
      <div id="basicComponentDiv">
       
        <div id="invoice">
          <Invoiceprintout id="1975177" />
        </div>
       
        <style jsx global>{`
           
            `}</style>
      </div>
    );
  }
}
