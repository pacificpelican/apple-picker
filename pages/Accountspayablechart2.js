import React, { Component } from "react";

//  Accountspayablechart2.js ReactJS 16.3+ component for apple-picker
//  by Dan McKeown http://danmckeown.info copyright 2019

import withChart from "./withChart";

let dest = "/api/1/getdbdata/db/accountsdb/object/payables";

export default withChart(0,0,dest,`payables`);
