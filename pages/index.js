import React, { Component } from "react";
import Home from "./Home";

//  index.js ReactJS component for apple-picker
//  by Dan McKeown http://danmckeown.info copyright 2018

import Textframe from "./textframe";

let Company = "Lovebirdsconsulting.com";

// let fetchReturn = [];

let org = Company;

// export const OrgContext = React.createContext(org);

export default class Index extends Component {

  state = {orgName: "AltaRedwood.work"}

  componentDidMount() {
    if(!localStorage.getItem('org')) {
      org = Company
    } else {
      org = localStorage.getItem('org');
      this.setState({orgName: org});
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
