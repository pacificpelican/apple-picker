import React, { Component } from "react";

import withChart from "./withChart";

let dest = "http://localhost:3005/api/1/getexpenses/org/lovebirdsconsulting/limit/100";

export default withChart(0,0,dest,`expenses`);
