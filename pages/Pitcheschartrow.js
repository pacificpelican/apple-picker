import React, { Component } from "react";

//  Accountrecievablechartrow.js ReactJS 16.3+ component for apple-picker
//  by Dan McKeown http://danmckeown.info copyright 2018

const Pitcheschartrow = ({interVal}) => (
  <div className="dataZone"><span className="accountrecievable-date" key={interVal.value.date}>{interVal.value.date}</span><span className="accountrecievable--amount" key={interVal.value.audience}>{interVal.value.audience}</span><span className="accountrecievable-description" key={interVal.value.description}>{interVal.value.description}</span><span className="accountrecievable--payee" key={interVal.value.companyMarketCap}>{interVal.value.companyMarketCap}</span><span className="accountrecievable-notes" key={interVal.value.notes}>{interVal.value.notes}</span></div>
 );

export default Pitcheschartrow;
