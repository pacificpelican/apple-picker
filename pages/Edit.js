//  danmckeown.info copyright 2017-2018
//  Desk.js
//  mlBench
import React, { Component } from "react";
import Link from "next/link";

import Spreadsheet from "./Spreadsheet";

import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import Card from '@material-ui/core/Card';

function reloadOnce() {
  console.log("about to reload");
  return window.location.reload();
  return false;
}

class Edit extends Component {
  state = {
    Ok: true,
    entry: '',
    cryptonowNumber: 0,
    userObjectAsk: ""
  };

  constructor(props) {
    super();

    this.handlecValueChange = this.handlecValueChange.bind(this);

  }

  static async getInitialProps({ req }) {
    
    console.log(req);
    const tuple = req ? req.headers['tuple'] : navigator.tuple;
    console.log("props: " + tuple);
    return { tuple }
  }


  handlecValueChange(event) {
    let capturedVal = event.target.value;
    this.setState({ userObjectAsk: capturedVal });
  }

  componentDidMount(props) {
    //this.setState({ entry: this.props.val})

    // let url_string = Window.location.href;
    // let url = new URL(url_string);
    // var val = url.searchParams.get("val");
    // console.log(val);
  }

  render(props) {

    console.log(this.props);

    return (
      <div id="editContainer" className="mlBench-content-wrappers">
        <button id="backButton" href="#" onClick={this.goBack}>
          ⬅️ back
        </button>
        <h1 id="desk">
          apple-picker Object Editor<span id="rollLink">
            {" "}
            <a href="#" onClick={reloadOnce}>
              reload()
            </a>
          </span>
        </h1>
        
        <section id="user-input">
          <Input
            id="crypto_output"
            onChange={this.handlecValueChange}
            value={this.state.userObjectAsk}
          />
          <Button variant="contained" color="primary" onClick={this.handleLookupButton} id="lookupDB">
            update in DB
          </Button>
        </section>
        <section>
          <span>val: {this.props.val}
            <br />
          tuple: {this.props.tuple}</span>
        </section>
        {/* <Card id="results">
          <Spreadsheet dbdataArr={this.state.dbdataArr} />
        </Card> */}

        <footer id="deskFooter">
          powered by <b>mlBench Spreadsheetcore</b> by <a href="http://danmckeown.info">Dan McKeown</a>
        </footer>
        
        <style jsx global>{`
          h1#desk, aside {
            font-family: Futura, "Ubuntu", "Lucida Grande", "Roboto", Helvetica,
              sans-serif;
          }
          footer#deskFooter {
            margin-top: 2em;
            font-family: Ubuntu, Roboto, Helvetica, sans-serif;
          }
          section#user-input {
            margin-bottom: calc(3vh + 10px);
          }
          #lookupDB {
            margin-left: calc(1vh + 10px);
          }
          #results {
            font-family: "Inconsolata", "Anonymous Pro", "Hack", Menlo, monospace;
          }
          div#deskContainer {
            background: #f7f8f9;
          }
        `}</style>
      </div>
    );
  }
}

export default Edit;
