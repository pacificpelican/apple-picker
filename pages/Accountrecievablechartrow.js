import React, { Component } from "react";

//  Accountrecievablechartrow.js ReactJS 16.3+ component for apple-picker
//  by Dan McKeown http://danmckeown.info copyright 2018

const Accountrecievablechartrow = ({interVal}) => (
  <div className="dataZone"><span className="accountrecievable-date" key={interVal.value.date}>{interVal.value.date}</span><span className="accountrecievable--amount" key={interVal.value.amount}>{interVal.value.amount}</span><span className="accountrecievable-description" key={interVal.value.description}>{interVal.value.description}</span><span className="accountrecievable--payee" key={interVal.value.debtor}>{interVal.value.debtor}</span><span className="accountrecievable-notes" key={interVal.value.notes}>{interVal.value.notes}</span></div>
 );

export default Accountrecievablechartrow;
 