import React, { Component } from "react";

//  Revenuechartrow.js ReactJS 16.3+ component for apple-picker
//  by Dan McKeown http://danmckeown.info copyright 2018

const Revenuechartrow = ({interVal}) => (
  <div className="dataZone"><span className="revenue-date" key={interVal.value.date}>{interVal.value.date}</span><span className="revenue-amount" key={interVal.value.amount}>{interVal.value.amount}</span><span className="revenue-description" key={interVal.value.description}>{interVal.value.description}</span><span className="revenue-payer" key={interVal.value.payer}>{interVal.value.payer}</span><span className="revenue-notes" key={interVal.value.notes}>{interVal.value.notes}</span></div>
 );

export default Revenuechartrow;
 