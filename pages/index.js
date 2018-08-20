import React, { Component } from "react";
import Home from "./Home";

//  index.js ReactJS component for apple-picker
//  by Dan McKeown http://danmckeown.info copyright 2018

import Textframe from "./textframe";

let Company = "Lovebirdsconsulting.com";

// let fetchReturn = [];

let org = Company;

// export const OrgContext = React.createContext(org);

import Orgname from "./Orgname";

export default class Index extends Component {

  state = {orgName: "AltaRedwood.work"}

  componentDidMount() {
  }

  render() {
    return (
      <div>
        <Home />
        <Orgname />
      </div>
          
    )
  }
}
