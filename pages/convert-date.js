"use strict";

//  via https://stackoverflow.com/questions/6982692/html5-input-type-date-default-value-to-today

function convertDate() {
  var now = new Date();
  var month = (now.getMonth() + 1);               
  var day = now.getDate();
  if (month < 10) 
    month = "0" + month;
  if (day < 10) 
    day = "0" + day;
  var today = now.getFullYear() + '-' + month + '-' + day;
  return today;
}

module.exports = convertDate;