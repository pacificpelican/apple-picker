//  danmckeown.info copyright 2017-2018
//  Desk.js
//  mlBench
import React, { Component } from "react";
import Link from "next/link";

import Spreadsheet from "./Spreadsheet";

import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import Card from '@material-ui/core/Card';
import { Tab } from "@material-ui/core";

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
    userObjectAsk: '_'
  };

  constructor(props) {
    super();

    this.handlecValueChange = this.handlecValueChange.bind(this);
    this.handleLookupButton = this.handleLookupButton.bind(this);

  }

  // static async getInitialProps({ req }) {
    
  //   console.log(req);
  //   const tuple = req ? req.headers['tuple'] : navigator.tuple;
  //   console.log("props: " + tuple);
  //   return { tuple }
  // }


  handlecValueChange(event) {
    console.log(event.target.value)
    let capturedVal = event.target.value;
    this.setState({ userObjectAsk: capturedVal });
  }

  handleLookupButton(event) {
    let cont = this.letServerUpdate(this.props.url.query.store, this.props.url.query.tuple, this.props.url.query.objprop, this.props.url.query.val, this.state.userObjectAsk);
  }

  letServerUpdate(obj, tuple, objprop, objkey, newval) {
      let apiUrlPrefix = '';
      let dest = apiUrlPrefix + '/api/1/updatedata/db/' + obj + '/' + tuple + '/' + objprop + '/' + objkey + '/' + newval;

    //  /api/1/updatedata/db/:db/object/:obj/tuple/:tuple/objprop/:objprop/objkey/:objkey/newval/:newval

      fetch(dest, {method: 'post'})
        .then(function(response) {
          if (response.ok) {
            console.log("response ok");
            // console.log(response.json);
            // for (var e in response.json) {
            //   console.log(e.toString());
            // }
            // console.log(response.text);
            return response.json();
          }
          else {
            throw new Error(response.Error);
          }
          // throw new Error("Network did not respond.");
          // return response.blob();
      })
        .then(function(myReturn) {
          console.log(myReturn);
          
        //  that.setState({ pricesAndCaps: oldArr });
      });
  }

  componentDidMount(props) {
    //this.setState({ entry: this.props.val})

    // let url_string = Window.location.href;
    // let url = new URL(url_string);
    // var val = url.searchParams.get("val");
    // console.log(val);

    this.setState({userObjectAsk : this.props.url.query.val});
  }

  goBack() {
    window.history.back();
  }

  render(props) {

    // console.log(this.props);
    // console.log(this.props.url.query.tuple);
    // console.log(this.props.url.query.val);

    const tuple = this.props.url.query.tuple;
    let val = this.props.url.query.val;
    let store = this.props.url.query.store;
    let table = this.props.url.query.table;
    let prop = this.props.url.query.objprop;

    return (
      <div id="editContainer" className="mlBench-content-wrappers">
        <button id="backButton" href="#" onClick={this.goBack}>
          ⬅️ back
        </button>
        <h1 id="desk">
          apple-picker Object Prop Editor<span id="rollLink">
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
        <Card>
          <section id="propsInfo">
            <span>val: {val}
              <br />
            tuple: {tuple}
            <br />
            table: {table}
            <br />
            store: {store}
            <br />
            prop: {prop}</span>
          </section>
        </Card>
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
          section#propsInfo {
            font-family: "Roboto", "Ubuntu Sans", "Segoe UI", "Lucida Sans", Helvetica, sans-serif;
          }
        `}</style>
      </div>
    );
  }
}

export default Edit;
