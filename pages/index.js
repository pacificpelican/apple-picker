import React, { Component } from "react";
import Home from "./Home";

import Textframe from "./textframe";

let Company = "Lovebirdsconsulting.com";

// let fetchReturn = [];

let org = Company;

export const OrgContext = React.createContext(org);


//  index.js ReactJS component for apple-picker
//  by Dan McKeown http://danmckeown.info copyright 2018

export default class Index extends Component {

  state = {orgName: "AltaRedwood.work"}

  componentDidMount() {
    if(!localStorage.getItem('org')) {
      org = Company
    } else {
      org = localStorage.getItem('org');
    }
  }

  render() {
    return (
      <div>
        <Home />
      </div>
          
    )
  }
}