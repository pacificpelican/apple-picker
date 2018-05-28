import React, { Component } from "react";
import Link from "next/link";

//  Expensechart.js ReactJS 16.3+ component for apple-picker
//  by Dan McKeown http://danmckeown.info copyright 2018

export default class Expensechart extends Component {
  state = { Ok: true, expeneseArray: [] };

  constructor() {
    super();
  }

  componentDidMount() {
   
  }

  render(interVal) {
    {this.state.expeneseArray.map(function (interVal) {
      console.log("interVal.value.amount: " + interVal.value.amount);
        return <div className="dataZone"><span className="expense-date" key={interVal.value.date}>{interVal.value.date}</span><span className="expense-amount" key={interVal.value.amount}>{interVal.value.amount}</span><span className="expense-description" key={interVal.value.description}>{interVal.value.description}</span><span className="expense-payee" key={interVal.value.payee}>{interVal.value.payee}</span><span className="expense-notes" key={interVal.value.notes}>{interVal.value.notes}</span></div>
      })}
  }
}
