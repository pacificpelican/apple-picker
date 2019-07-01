import React, { Component } from "react";

import withChart from "./withChart";

const theObject = `invoices`;

let dest = "/api/1/getdbdata/db/accountsdb/object/" + theObject;

export default withChart(0,0,dest,theObject);
