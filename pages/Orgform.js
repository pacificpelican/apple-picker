import React, { Component } from "react";
import Link from "next/link";
// import { updateOrg, getOrg } from '../store'

//  Orgform.js ReactJS 16.3+ component for apple-picker
//  by Dan McKeown http://danmckeown.info copyright 2018

import Orger from "./orger";

// import { connect } from 'react-redux'
//  import { updateOrg, getOrg } from '../store'
//  import { reducer } from '../store'

// import { createStore } from 'redux';
// import { Provider } from 'react-redux';

// var store = createStore(reducer);

// const OrgContext = React.createContext('Company');

class Orgform extends Component {
  state = { Ok: true, expeneseArray: [], store: {}, orgName: '' };

  constructor() {
    super();
    this.doLookup = this.doLookup.bind(this);
  }

  // updateO = (newName) => {
  //   const {dispatch} = this.props
  //   dispatch(updateOrg(newName))
  // }

  // getO = () => {
  //   const {dispatch} = this.props
  //   dispatch(getOrg())
  // }

  doLookup() {
    let that = this;
    let dest = "api/1/getorgs/limit/5";
    fetch(dest, {})
      .then(function (response) {
        if (response.ok) {
          console.log("response ok");
          console.log(response.json);
          for (var e in response.json) {
            console.log(e.toString());
          }
          console.log(response.text);
          return response.json();
        }
        throw new Error("Network did not respond.");
        return response.blob();
      })
      .then(function (myReturn) {
        console.log(myReturn);
        that.setState({ expeneseArray: myReturn });
        that.setState({ store: myReturn[0] });

        // console.log('updating Redux store:');
        // console.log(myReturn[0].orgName)
        //  that.updateO(myReturn[0].orgName);
      });
  }

  UNSAFE_componentWillMount() { }

  componentDidMount() {
    this.doLookup();
  }

  render() {
    //  store = createStore(reducer);
    //  let ctxVal = this.state.expeneseArray[0].orgName
    return (
      <div id="basicComponentDiv">
        <div className="apple-picker-header">apple-picker _ Org Name Update</div>
        <Orger />
        <style jsx global>
          {`
            div.apple-picker-header {
              font-family: "Ubuntu", "Lucida Sans", "Segoe UI", "Roboto", sans-serif;
            }
            div.apple-picker-content {
                font-family: "Hack", "Fira Code", "Menlo", monospace;
            }
            input {
              padding: .5em .6em;
              margin-bottom: 0.3em;
              margin-top: 0.2em;
              display: inline-block;
              border: 1px solid #ccc;
              box-shadow: inset 0 1px 3px #ddd;
              border-radius: 4px;
              vertical-align: middle;
              box-sizing: border-box;
            }
          `}
        </style>
      </div>
    );
  }
}

export default Orgform;

// function mapStateToProps (state) {
//   const {org} = state
//   return {org}
// }

// export default connect(mapStateToProps)(Orgform)
