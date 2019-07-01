import React, { Component } from "react";

//  Prospectschart2.js ReactJS 16.3+ component for apple-picker
//  by Dan McKeown http://danmckeown.info copyright 2019

import withChart from "./withChart";

let theObject = `prospects`;

let dest = "/api/1/getdbdata/db/accountsdb/object/" + theObject;

export default withChart(0,0,dest,theObject);
