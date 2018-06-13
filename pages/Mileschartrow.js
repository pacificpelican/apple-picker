import React, { Component } from "react";

//  Mileschartrow.js ReactJS 16.3+ component for apple-picker
//  by Dan McKeown http://danmckeown.info copyright 2018

const Mileschartrow = ({interVal}) => (
  <div className="dataZone"><span className="miles-date" key={interVal.value.date}>{interVal.value.date}</span><span className="miles-amount" key={interVal.value.miles}>{interVal.value.miles}</span><span className="miles-description" key={interVal.value.description}>{interVal.value.description}</span><span className="expense-payee" key={interVal.value.destination}>{interVal.value.destination}</span><span className="miles-notes" key={interVal.value.notes}>{interVal.value.notes}</span></div>
 );

export default Mileschartrow;
 