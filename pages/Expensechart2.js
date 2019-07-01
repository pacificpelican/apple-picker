import React, { Component } from "react";

import withChart from "./withChart";

let dest = "/api/1/getdbdata/db/accountsdb/object/expenses";

export default withChart(0,0,dest,`expenses`);
