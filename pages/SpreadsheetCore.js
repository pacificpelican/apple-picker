//  danmckeown.info copyright 2017-2018
//  SpreadsheetCore.js
//  mlBench
import React, { Component } from "react";

class SpreadsheetCore extends Component {
  render(props) {

    var g;
    if (this.props.spreadsheetdata[0] !== undefined) {
      g = [{}, ...this.props.spreadsheetdata];
    }
    else {
      g = [this.props.spreadsheetdata];
    //  g = [{}, this.props.spreadsheetdata];
    //   alert("abortion " + this.props.spreadsheetdata[1]);
    // g = [{},{}]
    
    }
    

    return (
      <div id="desk" className="mlBench-content">
        <section id="keylibrary">
          {g.map(function(interVal) {
            let valArr = Object.keys(interVal);

            let retSet = [];
            let lastOne = "";

            for (let i = 0; i < valArr.length; i++) {
              if (typeof valArr[i] === "object") {
                //         console.log("valArr[i] is an object");
              } else {
                retSet.push(
                  <span key={valArr[i]} className="valHeaderRow">
                    {valArr[i] + " "}
                  </span>
                );
                lastOne = valArr;
              }
            }

            //     return [...retSet];
          })}
        </section>
        <section id="datalibrary">
          {g.map(function(interVal) {
            let keyArr = Object.keys(interVal);
            let valArr = Object.values(interVal);

            let retSet = [];

            for (let i = 0; i < keyArr.length; i++) {
              if (typeof keyArr[i] === "object") {
              } else {
                retSet.push(
                  <span key={keyArr[i]} className="valHeaderRow">
                    {keyArr[i] + " "}
                  </span>
                );
              }
              if (i === keyArr.length - 1) {
                retSet.push(<div className="endDividerHead" />);
              }
            }

            for (let i = 0; i < valArr.length; i++) {
              if (typeof valArr[i] === "object") {
                // retSet.push(
                //   <span><Spreadsheet dbdataArr={ valArr[i] } /></span>
                // );
                 retSet.push(
                  <span key={valArr[i]} className="valSheetRow">_</span>
                );
              } else {
                retSet.push(
                  <span key={valArr[i]} className="valSheetRow">
                    {valArr[i] + " "}
                  </span>
                );
              }
              if (i === keyArr.length - 1) {
                retSet.push(<div className="endDivider" />);
              }
            }

            return [...retSet];
          })}
        </section>
        <style>{`
       
        `}</style>
      </div>
    );
  }
}

export default SpreadsheetCore;
