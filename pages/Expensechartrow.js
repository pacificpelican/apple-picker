import React, { Component } from "react";

//  Expensechartrow.js ReactJS 16.3+ component for apple-picker
//  by Dan McKeown http://danmckeown.info copyright 2018

const Expensechartrow = ({interVal}) => (
  <div className="dataZone"><span className="expense-date">{interVal.value.date}</span><span className="expense-amount">{interVal.value.amount}</span><span className="expense-description">{interVal.value.description}</span><span className="expense-payee">{interVal.value.payee}</span><span className="expense-notes">{interVal.value.notes}</span></div>
 );

export default Expensechartrow;
 