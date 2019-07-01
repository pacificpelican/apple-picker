import React, { Component } from "react";

//  Taxeschart2.js ReactJS 16.8+ component for apple-picker
//  by Dan McKeown http://danmckeown.info copyright 2019

import withChart from "./withChart";

let theObject = `taxes`;

let dest = "/api/1/getdbdata/db/accountsdb/object/" + theObject;

export default withChart(0,0,dest,theObject);
