import React, { Component } from "react";
import Link from "next/link";

//  Orgname.js starter ReactJS 16.3+ component for apple-picker
//  by Dan McKeown http://danmckeown.info copyright 2018

export default class Orgname extends Component {
  state = { Ok: true, orgName: 'The Company' };

  constructor() {
    super();
  }

  UNSAFE_componentWillMount() { }

  componentDidMount() {
    if (!localStorage.getItem('org')) {
      //org = 'The Company';
      this.setState({ orgName: 'The Company' });
    } else {
      let org = localStorage.getItem('org');
      this.setState({ orgName: org });
    }
  }

  render() {
    return (
      <div id="basicLayer">
        <aside id="orgInfo">
          <spam id="orgNamePre">current org name:</spam> <span id="orgName">{this.state.orgName}</span>
        </aside>
        <style>
          {`
            aside {
                font-family: "Hack", "Fira Code", "Menlo", monospace;
            }
            `}
        </style>
      </div>
    );
  }
}
