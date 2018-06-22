import React, { Component } from "react";

//  Timechartrow.js ReactJS 16.3+ component for apple-picker
//  by Dan McKeown http://danmckeown.info copyright 2018

const Timechartrow = ({interVal}) => (
  <div className="dataZone"><span className="miles-date" key={interVal.value.date}>{interVal.value.date}</span><span className="miles-amount" key={interVal.value.timeWorked}>{interVal.value.timeWorked}</span><span className="miles-description" key={interVal.value.description}>{interVal.value.description}</span><span className="expense-payee" key={interVal.value.client}>{interVal.value.client}</span><span className="miles-notes" key={interVal.value.notes}>{interVal.value.notes}</span></div>
 );

export default Timechartrow;
 