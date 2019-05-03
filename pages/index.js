import React, { Component } from "react";
import Home from "./Home";

//  index.js ReactJS component for apple-picker
//  by Dan McKeown http://danmckeown.info copyright 2018

let Company = "Lovebirdsconsulting.com";

let org = Company;

import Orgname from "./Orgname";

export default class Index extends Component {

  state = {orgName: "AltaRedwood.work"}

  render() {
    return (
      <div id="applePickerContainer">
        <Home />
        <Orgname />
        <style jsx global>{`
            :root {
              --fonts-default: "Ubuntu", "Lucida Sans", "Segoe UI", "Roboto", sans-serif;
              --fonts-ui: "Hack", "Fira Code", "Menlo", monospace;
            }
            body {
              background: #f2f5f9;
            }
            div#applePickerContainer {
              background: white;
            }
            `}</style>
      </div>
    )
  }
}
