import React, { Component } from "react";
import Home from "./Home";

import Textframe from "./textframe";

let Company = "Lovebirdsconsulting.com";

export const OrgContext = React.createContext(Company);

//  index.js ReactJS component for apple-picker
//  by Dan McKeown http://danmckeown.info copyright 2018

export default class Index extends Component {

  state = {orgName: Company}

  render() {
    return (
        <div id="apple-picker-container">
          <Home />
        </div>
    )
  }
}