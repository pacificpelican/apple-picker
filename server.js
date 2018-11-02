const Koa = require('koa');
const next = require('next');
const Router = require('koa-router');

const port = parseInt(process.env.PORT, 10) || 3005;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const loki = require("lokijs");
var AccountsDB = new loki(__dirname + "/db/accountsdb.json");

const convertObj = require("object-array-converter");

const locatorScale = 3000000;

//  This pre-fetches the A/R data
var apiDataRec = {};
let umbrella = "receivables";
let retData = {};

var apiDataTime = {};

function getData1() {
  AccountsDB.loadDatabase({}, () => {
    let _collection = AccountsDB.getCollection(umbrella);

    if (!_collection) {
      console.log(
        "Collection %s does not exist. Creating ... 🎮",
        umbrella
      );
      _collection = AccountsDB.addCollection(umbrella);
    }
    else {
      console.log("collection exists");
    }

    retData = _collection.find();

    console.log(retData);

    apiDataRec = retData;
  })
}

let timesheet = "timesheet";

function getDataTime() {
  AccountsDB.loadDatabase({}, () => {
    let _collection = AccountsDB.getCollection(timesheet);

    if (!_collection) {
      console.log(
        "Collection %s does not exist. Creating ... 🎮",
        timesheet
      );
      _collection = AccountsDB.addCollection(timesheet);
    }
    else {
      console.log("collection exists");
    }

    retData = _collection.find();

    console.log(retData);

    apiDataTime = retData;
  })
}

let payables = "payables";
var apiDataPay = {};

function getDataPay() {
  AccountsDB.loadDatabase({}, () => {
    let _collection = AccountsDB.getCollection(payables);

    if (!_collection) {
      console.log(
        "Collection %s does not exist. Creating ... 🎮",
        payables
      );
      _collection = AccountsDB.addCollection(payables);
    }
    else {
      console.log("collection exists");
    }

    retData = _collection.find();

    console.log(retData);

    apiDataPay = retData;
  })
}

let expenses = "expenses";
var apiDataExp = {};

function getDataExp() {
  AccountsDB.loadDatabase({}, () => {
    let _collection = AccountsDB.getCollection(expenses);

    if (!_collection) {
      console.log(
        "Collection %s does not exist. Creating ... 🎮",
        expenses
      );
      _collection = AccountsDB.addCollection(expenses);
    }
    else {
      console.log("collection exists");
    }

    retData = _collection.find();

    console.log(retData);

    apiDataExp = retData;
  })
}

var apiDataProspects = {};
let prospects = "prospects";

function getDataPro() {
  AccountsDB.loadDatabase({}, () => {
    let _collection = AccountsDB.getCollection(prospects);

    if (!_collection) {
      console.log(
        "Collection %s does not exist. Creating ... 🎮",
        prospects
      );
      _collection = AccountsDB.addCollection(prospects);
    }
    else {
      console.log("collection exists");
    }

    retData = _collection.find();

    console.log(retData);

    apiDataProspects = retData;
  })
}

var apiDataClients = {};
let clients = "clients";

function getDataCli() {
  AccountsDB.loadDatabase({}, () => {
    let _collection = AccountsDB.getCollection(clients);

    if (!_collection) {
      console.log(
        "Collection %s does not exist. Creating ... 🎮",
        clients
      );
      _collection = AccountsDB.addCollection(clients);
    }
    else {
      console.log("collection exists");
    }

    retData = _collection.find();

    console.log(retData);

    apiDataClients = retData;
  })
}

var apiDataTax = {};
let taxes = "taxes";

function getDataTax() {
  AccountsDB.loadDatabase({}, () => {
    let _collection = AccountsDB.getCollection(taxes);

    if (!_collection) {
      console.log(
        "Collection %s does not exist. Creating ... 🎮",
        taxes
      );
      _collection = AccountsDB.addCollection(taxes);
    }
    else {
      console.log("collection exists");
    }

    retData = _collection.find();

    console.log(retData);

    apiDataTax = retData;
  })
}

var apiDataInt = {};
let interactions = "interactions";

function getDataInt() {
  AccountsDB.loadDatabase({}, () => {
    let _collection = AccountsDB.getCollection(interactions);

    if (!_collection) {
      console.log(
        "Collection %s does not exist. Creating ... 🎮",
        interactions
      );
      _collection = AccountsDB.addCollection(interactions);
    }
    else {
      console.log("collection exists");
    }

    retData = _collection.find();

    console.log(retData);

    apiDataInt = retData;
  })
}

//  getData1(); //  invocation of A/R pre-fetch function
//  getDataTime(); //  invocation of time sheet pre-fetch function
//  getDataPay();
//  getDataExp();
//  getDataPro();
//  getDataCli();
//  getDataTax();
getDataInt();


//  endof: A/R pre-fetch

let crypto;
try {
  crypto = require("crypto");
} catch (err) {
  console.log("crypto not available in this NodeJS version");
}

const generateCrypto = function getCryptoNow() {
  var retVal;
  let that = this;
  crypto.randomBytes(8, (err, buf) => {
    if (err) throw err;
    let rVal = buf.toString("hex");
    console.log(
      `${buf.length} bytes of random hex data: ${buf.toString("hex")}`
    );
    let rValHTML = `<span>${rVal}</span>`;
    retVal = rVal;
    // that.setState({
    //   cryptonow: retVal
    // });
  });
  return retVal;
}

const cryptoVal = generateCrypto();

app.prepare()
  .then(() => {
    const server = new Koa()
    const router = new Router()

    router.get('/a', async ctx => {
      await app.render(ctx.req, ctx.res, '/b', ctx.query)
      ctx.respond = false
    })

    router.get('/b', async ctx => {
      await app.render(ctx.req, ctx.res, '/a', ctx.query)
      ctx.respond = false
    })

    router.get('/api/1/addexpense/amount/:total/user/:account/company/:enterprise/', async ctx => {

      console.log(ctx.req.url);

    })

    router.get('/api/1/addexpense/amount/:total/date/:paydate/payee/:payee/description/:desc/notes/:notes/org/:org/apid/:arid', async ctx => {

      console.log(ctx.req.url);
      console.log("description: " + ctx.params.desc);

      let umbrella = "expenses";

      AccountsDB.loadDatabase({}, function () {
        let _collection = AccountsDB.getCollection(umbrella);

        if (!_collection) {
          console.log(
            "Collection %s does not exist. Creating ... 🎮",
            umbrella
          );
          _collection = AccountsDB.addCollection(umbrella);
        }

        _collection.insertOne({
          amount: ctx.params.total,
          date: ctx.params.paydate,
          payee: ctx.params.payee,
          description: ctx.params.desc,
          notes: ctx.params.notes,
          org: ctx.params.org,
          accountspayableid: ctx.params.arid
        });

        console.log("saving expense data");

        AccountsDB.saveDatabase();
      })
      ctx.response.body = Object.assign({}, { "update": "expenses", "success": "ok" });
    })

    router.get('/api/1/addrevenue/amount/:total/date/:paydate/payer/:payer/description/:desc/notes/:notes/org/:org/arid/:arid/invid/:inv', async ctx => {
      console.log(ctx.req.url);
      console.log("description: " + ctx.params.desc);
      console.log("payer: " + ctx.params.payer);

      let umbrella = "revenues";

      AccountsDB.loadDatabase({}, function () {
        let _collection = AccountsDB.getCollection(umbrella);

        if (!_collection) {
          console.log(
            "Collection %s does not exist. Creating ... 🎮",
            umbrella
          );
          _collection = AccountsDB.addCollection(umbrella);
        }

        _collection.insertOne({
          amount: ctx.params.total,
          date: ctx.params.paydate,
          payer: ctx.params.payer,
          description: ctx.params.desc,
          notes: ctx.params.notes,
          org: ctx.params.org,
          accountsreceivableid: ctx.params.arid,
          invoiceID: ctx.params.inv,
          locator: Math.floor(Math.random() * locatorScale + 1)
        });

        console.log("saving revenue data");

        AccountsDB.saveDatabase();
      })
      ctx.response.body = Object.assign({}, { "update": "revenues", "success": "ok" });
    })

    var apiData = {};

    router.get('/api/1/getrevenue/org/:org/limit/:limit', async ctx => {

      let umbrella = "revenues";

      let retData = {};

      await AccountsDB.loadDatabase({}, function () {
        let _collection = AccountsDB.getCollection(umbrella);

        if (!_collection) {
          console.log(
            "Collection %s does not exist. Creating ... 🎮",
            umbrella
          );
          _collection = AccountsDB.addCollection(umbrella);
        }
        else {
          console.log("collection exists");
        }

        retData = _collection.find();

        console.log(retData);

        apiData = retData;
      })

      let respObj = Object.assign({}, apiData);

      let respArr = convertObj.toArray(respObj);

      ctx.response.body = respArr;
    })

  //  var apiDataExp = {};

    router.get('/api/1/getexpenses/org/:org/limit/:limit', async ctx => {

      // let umbrella = "expenses";

      // let retData = {};

      AccountsDB.loadDatabase({}, function () {
        let _collection = AccountsDB.getCollection(expenses);

        if (!_collection) {
          console.log(
            "Collection %s does not exist. Creating ... 🎮",
            expenses
          );
          _collection = AccountsDB.addCollection(expenses);
        }
        else {
          console.log("collection exists");
        }

        retData = _collection.find();

        console.log(retData);

        apiDataExp = retData;
      })

      let respObj = Object.assign({}, apiDataExp);

      let respArr = convertObj.toArray(respObj);

      ctx.response.body = respArr;
    })

  //  var apiDataPay = {};

    router.get('/api/1/getpayables/org/:org/limit/:limit', async ctx => {

      // let umbrella = "payables";

      // let retData = {};

      AccountsDB.loadDatabase({}, function () {
        let _collection = AccountsDB.getCollection(payables);

        if (!_collection) {
          console.log(
            "Collection %s does not exist. Creating ... 🎮",
            payables
          );
          _collection = AccountsDB.addCollection(payables);
        }
        else {
          console.log("collection exists");
        }

        retData = _collection.find();

        console.log(retData);

        apiDataPay = retData;
      })

      let respObj = Object.assign({}, apiDataPay);

      let respArr = convertObj.toArray(respObj);

      ctx.response.body = respArr;
    })

    router.get('/api/1/getreceivables/org/:org/limit/:limit', async ctx => {
      console.log(ctx.req.url);
      console.log("description: " + ctx.params.desc);

      AccountsDB.loadDatabase({}, () => { //  This runs to update the data while the app is running
        let _collection = AccountsDB.getCollection(umbrella);
    
        if (!_collection) {
          console.log(
            "Collection %s does not exist. Creating ... 🎮",
            umbrella
          );
          _collection = AccountsDB.addCollection(umbrella);
        }
        else {
          console.log("collection exists");
        }
    
        retData = _collection.find();
    
        console.log(retData);
    
        apiDataRec = retData;
      })

      let respObj = Object.assign({}, apiDataRec);

      let respArr = convertObj.toArray(respObj);

      ctx.response.body = respArr;
    })

    var apiDataInv = {};

    router.get('/api/1/getinvoices/org/:org/limit/:limit', async ctx => {

      let umbrella = "invoices";

      let retData = {};

      AccountsDB.loadDatabase({}, function () {
        let _collection = AccountsDB.getCollection(umbrella);

        if (!_collection) {
          console.log(
            "Collection %s does not exist. Creating ... 🎮",
            umbrella
          );
          _collection = AccountsDB.addCollection(umbrella);
        }
        else {
          console.log("collection exists");
        }

        retData = _collection.find();

        console.log(retData);

        apiDataInv = retData;
      })

      let respObj = Object.assign({}, apiDataInv);

      let respArr = convertObj.toArray(respObj);

      ctx.response.body = respArr;
    })

    router.get('/api/1/addtime/amount/:total/date/:paydate/client/:dest/description/:desc/notes/:notes/org/:org/rate/:rate/clientid/:clientid', async ctx => {
      console.log(ctx.req.url);
      console.log("description: " + ctx.params.desc);
      console.log("time: " + ctx.params.total);

      let umbrella = "timesheet";

      AccountsDB.loadDatabase({}, function () {
        let _collection = AccountsDB.getCollection(umbrella);

        if (!_collection) {
          console.log(
            "Collection %s does not exist. Creating ... 🎮",
            umbrella
          );
          _collection = AccountsDB.addCollection(umbrella);
        }

        _collection.insertOne({
          timeWorked: ctx.params.total,
          date: ctx.params.paydate,
          stakeholder: ctx.params.dest,
          description: ctx.params.desc,
          notes: ctx.params.notes,
          rate: ctx.params.rate,
          org: ctx.params.org,
          clientID: ctx.params.clientid,
          locator: Math.floor(Math.random() * locatorScale + 1)
        });

        console.log("saving time data");

        AccountsDB.saveDatabase();

      })
      ctx.response.body = Object.assign({}, { "update": "time", "success": "ok" });

    })

    router.get('/api/1/addmiles/amount/:total/date/:paydate/destination/:dest/embarkment/:emb/description/:desc/roundtrip/:round/notes/:notes/org/:org/clientid/:cid', async ctx => {
      //  await app.render(ctx.req, ctx.res, '/a', ctx.query)
      console.log(ctx.req.url);
      console.log("description: " + ctx.params.desc);
      console.log("miles: " + ctx.params.total);

      let umbrella = "miles";

      AccountsDB.loadDatabase({}, function () {
        let _collection = AccountsDB.getCollection(umbrella);

        if (!_collection) {
          console.log(
            "Collection %s does not exist. Creating ... 🎮",
            umbrella
          );
          _collection = AccountsDB.addCollection(umbrella);
        }

        _collection.insertOne({
          miles: ctx.params.total,
          date: ctx.params.paydate,
          destination: ctx.params.dest,
          embarkment: ctx.params.emb,
          roundtrip: ctx.params.round,
          description: ctx.params.desc,
          notes: ctx.params.notes,
          org: ctx.params.org,
          clientID: ctx.params.cid,
          locator: Math.floor(Math.random() * locatorScale + 1)
        });

        console.log("saving revenue data");

        AccountsDB.saveDatabase();
      })
      ctx.response.body = Object.assign({}, { "update": "miles", "success": "ok" });
    })

    var apiDataMiles = {};

    router.get('/api/1/getmiles/org/:org/limit/:limit', async ctx => {
      console.log(ctx.req.url);
      // console.log("description: " + ctx.params.desc);

      let umbrella = "miles";

      let retData = {};

      AccountsDB.loadDatabase({}, function () {
        let _collection = AccountsDB.getCollection(umbrella);

        if (!_collection) {
          console.log(
            "Collection %s does not exist. Creating ... 🎮",
            umbrella
          );
          _collection = AccountsDB.addCollection(umbrella);
        }
        else {
          console.log("collection exists");
        }

        retData = _collection.find();

        console.log(retData);

        apiDataMiles = retData;
      })

      let respObj = Object.assign({}, apiDataMiles);

      let respArr = convertObj.toArray(respObj);

      ctx.response.body = respArr;
    })

  //  var apiDataTime = {};

    router.get('/api/1/gettime/org/:org/limit/:limit', async ctx => {

      // let umbrella = "timesheet";

      // let retData = {};

      AccountsDB.loadDatabase({}, function () {
        let _collection = AccountsDB.getCollection(timesheet);

        if (!_collection) {
          console.log(
            "Collection %s does not exist. Creating ... 🎮",
            timesheet
          );
          _collection = AccountsDB.addCollection(timesheet);
        }
        else {
          console.log("collection exists");
        }

        retData = _collection.find();

        console.log(retData);

        apiDataTime = retData;
      })

      let respObj = Object.assign({}, apiDataTime);

      let respArr = convertObj.toArray(respObj);

      ctx.response.body = respArr;
    })

    router.get('/api/1/addreceivable/amount/:total/date/:paydate/payee/:payee/description/:desc/notes/:notes/org/:org/client/:clientID', async ctx => {
      console.log(ctx.req.url);
      console.log("description: " + ctx.params.desc);

      let umbrella = "receivables";

      AccountsDB.loadDatabase({}, function () {
        let _collection = AccountsDB.getCollection(umbrella);

        if (!_collection) {
          console.log(
            "Collection %s does not exist. Creating ... 🎮",
            umbrella
          );
          _collection = AccountsDB.addCollection(umbrella);
        }

        _collection.insertOne({
          amount: ctx.params.total,
          date: ctx.params.paydate,
          debtor: ctx.params.payee,
          description: ctx.params.desc,
          notes: ctx.params.notes,
          org: ctx.params.org,
          clientID: ctx.params.clientID,
          locator: Math.floor(Math.random() * locatorScale + 1)
        });

        console.log("saving expense data");

        AccountsDB.saveDatabase();
      })
      ctx.response.body = Object.assign({}, { "update": "receivables", "success": "ok" });
    })

    router.get('/api/1/addinvoice/amount/:total/date/:paydate/payee/:payee/description/:desc/notes/:notes/org/:org/arid/:arid', async ctx => {
      console.log(ctx.req.url);
      console.log("description: " + ctx.params.desc);

      let umbrella = "invoices";

      AccountsDB.loadDatabase({}, function () {
        let _collection = AccountsDB.getCollection(umbrella);

        const cryptoValLocal = generateCrypto();

        if (!_collection) {
          console.log(
            "Collection %s does not exist. Creating ... 🎮",
            umbrella
          );
          _collection = AccountsDB.addCollection(umbrella);
        }

        _collection.insertOne({
          amount: ctx.params.total,
          date: ctx.params.paydate,
          debtor: ctx.params.payee,
          description: ctx.params.desc,
          notes: ctx.params.notes,
          org: ctx.params.org,
          accountsreceivableid: ctx.params.arid,
          invoiceLocator: Math.floor(Math.random() * locatorScale + 1),
          locator: Math.floor(Math.random() * locatorScale + 1)
        });

        console.log("saving invoice data");

        AccountsDB.saveDatabase();
      })
      ctx.response.body = Object.assign({}, { "update": "invoices", "success": "ok" });
    })

    router.get('/api/1/addpayable/amount/:total/date/:paydate/payee/:payee/description/:desc/notes/:notes/org/:org', async ctx => {
      console.log(ctx.req.url);
      console.log("description: " + ctx.params.desc);

      let umbrella = "payables";

      AccountsDB.loadDatabase({}, function () {
        let _collection = AccountsDB.getCollection(umbrella);

        if (!_collection) {
          console.log(
            "Collection %s does not exist. Creating ... 🎮",
            umbrella
          );
          _collection = AccountsDB.addCollection(umbrella);
        }

        _collection.insertOne({
          amount: ctx.params.total,
          date: ctx.params.paydate,
          creditor: ctx.params.payee,
          description: ctx.params.desc,
          notes: ctx.params.notes,
          org: ctx.params.org,
          locator: Math.floor(Math.random() * locatorScale + 1)
        });

        console.log("saving expense data");

        AccountsDB.saveDatabase();
      })
      ctx.response.body = Object.assign({}, { "update": "payables", "success": "ok" });
    })

    router.get('/api/1/addclient/amount/:total/date/:paydate/client/:payee/description/:desc/notes/:notes/org/:org/prospectid/:pid', async ctx => {
      console.log(ctx.req.url);
      console.log("description: " + ctx.params.desc);

      let umbrella = "clients";

      AccountsDB.loadDatabase({}, function () {
        let _collection = AccountsDB.getCollection(umbrella);

        if (!_collection) {
          console.log(
            "Collection %s does not exist. Creating ... 🎮",
            umbrella
          );
          _collection = AccountsDB.addCollection(umbrella);
        }

        _collection.insertOne({
          client: ctx.params.payee,
          date: ctx.params.paydate,
          description: ctx.params.desc,
          notes: ctx.params.notes,
          expectedAmount: ctx.params.total,
          org: ctx.params.org,
          prospectID: ctx.params.pid,
          locator: Math.floor(Math.random() * locatorScale + 1)
        });

        console.log("saving expense data");

        AccountsDB.saveDatabase();
      })
      ctx.response.body = Object.assign({}, { "update": "clients", "success": "ok" });
    })

    router.get('/api/1/addprospect/amount/:total/date/:paydate/client/:payee/description/:desc/notes/:notes/org/:org', async ctx => {
      console.log(ctx.req.url);
      console.log("description: " + ctx.params.desc);

      let umbrella = "prospects";

      AccountsDB.loadDatabase({}, function () {
        let _collection = AccountsDB.getCollection(umbrella);

        if (!_collection) {
          console.log(
            "Collection %s does not exist. Creating ... 🎮",
            umbrella
          );
          _collection = AccountsDB.addCollection(umbrella);
        }

        _collection.insertOne({
          prospect: ctx.params.payee,
          date: ctx.params.paydate,
          description: ctx.params.desc,
          notes: ctx.params.notes,
          expectedAmount: ctx.params.total,
          org: ctx.params.org,
          locator: Math.floor(Math.random() * locatorScale + 1)
        });

        console.log("saving expense data");

        AccountsDB.saveDatabase();
      })
      ctx.response.body = Object.assign({}, { "update": "prospects", "success": "ok" });

      //  ctx.respond = false;
    })

    // var apiDataProspects = {};

    router.get('/api/1/getprospects/org/:org/limit/:limit', async ctx => {
      //  await app.render(ctx.req, ctx.res, '/a', ctx.query)
      console.log(ctx.req.url);
      console.log("description: " + ctx.params.desc);

      // let umbrella = "prospects";

      // let retData = {};

      AccountsDB.loadDatabase({}, function () {
        let _collection = AccountsDB.getCollection(prospects);

        if (!_collection) {
          console.log(
            "Collection %s does not exist. Creating ... 🎮",
            prospects
          );
          _collection = AccountsDB.addCollection(prospects);
        }
        else {
          console.log("collection exists");
        }

        retData = _collection.find();

        console.log(retData);

        apiDataProspects = retData;
      })

      let respObj = Object.assign({}, apiDataProspects);

      let respArr = convertObj.toArray(respObj);

      ctx.response.body = respArr;
    })

    router.get('/api/1/addpitch/amount/:total/date/:paydate/client/:payee/description/:desc/notes/:notes/org/:org/prospectid/:pid', async ctx => {
      //  await app.render(ctx.req, ctx.res, '/a', ctx.query)
      console.log(ctx.req.url);
      console.log("description: " + ctx.params.desc);

      let umbrella = "pitches";

      AccountsDB.loadDatabase({}, function () {
        let _collection = AccountsDB.getCollection(umbrella);

        if (!_collection) {
          console.log(
            "Collection %s does not exist. Creating ... 🎮",
            umbrella
          );
          _collection = AccountsDB.addCollection(umbrella);
        }

        _collection.insertOne({
          audience: ctx.params.payee,
          date: ctx.params.paydate,
          description: ctx.params.desc,
          notes: ctx.params.notes,
          companyMarketCap: ctx.params.total,
          org: ctx.params.org,
          prospectID: ctx.params.pid,
          locator: Math.floor(Math.random() * locatorScale + 1)
        });

        console.log("saving pitch data");

        AccountsDB.saveDatabase();

      })
      ctx.response.body = Object.assign({}, { "update": "pitches", "success": "ok" });
    })

    router.get('/api/1/addinteraction/amount/:total/date/:paydate/client/:payee/description/:desc/notes/:notes/org/:org/prospectid/:pid', async ctx => {
      //  await app.render(ctx.req, ctx.res, '/a', ctx.query)
      console.log(ctx.req.url);
      console.log("description: " + ctx.params.desc);

      let umbrella = "interactions";

      AccountsDB.loadDatabase({}, function () {
        let _collection = AccountsDB.getCollection(umbrella);

        if (!_collection) {
          console.log(
            "Collection %s does not exist. Creating ... 🎮",
            umbrella
          );
          _collection = AccountsDB.addCollection(umbrella);
        }

        _collection.insertOne({
          audience: ctx.params.payee,
          date: ctx.params.paydate,
          description: ctx.params.desc,
          notes: ctx.params.notes,
          estimatedValueAdded: ctx.params.total,
          org: ctx.params.org,
          clientID: ctx.params.pid,
          locator: Math.floor(Math.random() * locatorScale + 1)
        });

        console.log("saving pitch data");

        AccountsDB.saveDatabase();
      })
      ctx.response.body = Object.assign({}, { "update": "interactions", "success": "ok" });
    })

  //  var apiDataClients = {}

    router.get('/api/1/getclients/org/:org/limit/:limit', async ctx => {
      //  await app.render(ctx.req, ctx.res, '/a', ctx.query)
      console.log(ctx.req.url);
      console.log("description: " + ctx.params.desc);

      // let umbrella = "clients";

      // let retData = {};

      AccountsDB.loadDatabase({}, function () {
        let _collection = AccountsDB.getCollection(clients);

        if (!_collection) {
          console.log(
            "Collection %s does not exist. Creating ... 🎮",
            clients
          );
          _collection = AccountsDB.addCollection(clients);
        }
        else {
          console.log("collection exists");
        }

        retData = _collection.find();

        console.log(retData);

        apiDataClients = retData;
      })

      let respObj = Object.assign({}, apiDataClients);

      let respArr = convertObj.toArray(respObj);

      ctx.response.body = respArr;
    })

    var apiDataPitches = {};

    router.get('/api/1/getpitches/org/:org/limit/:limit', async ctx => {
      //  await app.render(ctx.req, ctx.res, '/a', ctx.query)
      console.log(ctx.req.url);
      console.log("description: " + ctx.params.desc);

      let umbrella = "pitches";

      let retData = {};

      AccountsDB.loadDatabase({}, function () {
        let _collection = AccountsDB.getCollection(umbrella);

        if (!_collection) {
          console.log(
            "Collection %s does not exist. Creating ... 🎮",
            umbrella
          );
          _collection = AccountsDB.addCollection(umbrella);
        }
        else {
          console.log("collection exists");
        }

        retData = _collection.find();

        console.log(retData);

        apiDataPitches = retData;
      })

      let respObj = Object.assign({}, apiDataPitches);

      let respArr = convertObj.toArray(respObj);

      ctx.response.body = respArr;
    })

  // var apiDataInter = {};

    router.get('/api/1/getinteractions/org/:org/limit/:limit', async ctx => {
      //  await app.render(ctx.req, ctx.res, '/a', ctx.query)
      console.log(ctx.req.url);
      console.log("description: " + ctx.params.desc);

      // let umbrella = "interactions";

      // let retData = {};

      AccountsDB.loadDatabase({}, function () {
        let _collection = AccountsDB.getCollection(interactions);

        if (!_collection) {
          console.log(
            "Collection %s does not exist. Creating ... 🎮",
            interactions
          );
          _collection = AccountsDB.addCollection(interactions);
        }
        else {
          console.log("collection exists");
        }

        retData = _collection.find();

        console.log(retData);

        apiDataInt = retData;
      })

      let respObj = Object.assign({}, apiDataInt);

      let respArr = convertObj.toArray(respObj);

      ctx.response.body = respArr;
    })

    router.get('/api/1/addtax/amount/:total/date/:paydate/payee/:payee/description/:desc/notes/:notes/org/:org/apid/:arid', async ctx => {

      console.log(ctx.req.url);
      console.log("description: " + ctx.params.desc);

      let umbrella = "taxes";

      AccountsDB.loadDatabase({}, function () {
        let _collection = AccountsDB.getCollection(umbrella);

        if (!_collection) {
          console.log(
            "Collection %s does not exist. Creating ... 🎮",
            umbrella
          );
          _collection = AccountsDB.addCollection(umbrella);
        }

        _collection.insertOne({
          amount: ctx.params.total,
          date: ctx.params.paydate,
          payee: ctx.params.payee,
          description: ctx.params.desc,
          notes: ctx.params.notes,
          org: ctx.params.org,
          accountspayableid: ctx.params.arid,
          locator: Math.floor(Math.random() * locatorScale + 1)
        });

        console.log("saving tax data");

        AccountsDB.saveDatabase();
      })
      ctx.response.body = Object.assign({}, { "update": "taxes", "success": "ok" });
    })

  //  var apiDataTax = {};

    router.get('/api/1/gettaxes/org/:org/limit/:limit', async ctx => {
      console.log(ctx.req.url);
      console.log("description: " + ctx.params.desc);

      // let umbrella = "taxes";

      // let retData = {};

      AccountsDB.loadDatabase({}, function () {
        let _collection = AccountsDB.getCollection(taxes);

        if (!_collection) {
          console.log(
            "Collection %s does not exist. Creating ... 🎮",
            taxes
          );
          _collection = AccountsDB.addCollection(taxes);
        }
        else {
          console.log("collection exists");
        }

        retData = _collection.find();

        console.log(retData);

        apiDataTax = retData;
      })

      let respObj = Object.assign({}, apiDataTax);

      let respArr = convertObj.toArray(respObj);

      ctx.response.body = respArr;
    })

    var apiDataInvOne = {};

    router.get('/api/1/getinvoice/org/:org/locator/:theid', async ctx => {

      let umbrella = "invoices";

      let retData = {};

      AccountsDB.loadDatabase({}, function () {
        let _collection = AccountsDB.getCollection(umbrella);

        if (!_collection) {
          console.log(
            "Collection %s does not exist. Creating ... 🎮",
            umbrella
          );
          _collection = AccountsDB.addCollection(umbrella);
        }
        else {
          console.log("collection " + umbrella + " exists");
        }

        //  retData = _collection.find();

        console.log("ctx.params: ");
        console.log(ctx.params);

        retData = _collection.find({ 'invoiceLocator': Number(ctx.params.theid) });

        console.log(retData);

        apiDataInvOne = retData[0];
      })

      let respObj = Object.assign({}, apiDataInvOne);

      let respArr = convertObj.toArray(respObj);

      //  ctx.response.body = respArr;
      ctx.response.body = apiDataInvOne;
    })

    var apiDataDB = {};
    //  http://localhost:3005/api/1/getdbdata/object/888
    //  wildcard GET API call (via mlBench, to support Desk component)
    router.get('/api/1/getdbdata/object/:obj', async ctx => {
      //  server.get("/api/1/getdbdata/object/:obj", (req, res) => {
      // res.header("Access-Control-Allow-Origin", "*");
      // res.header(
      //   "Access-Control-Allow-Headers",
      //   "Origin, X-Requested-With, Content-Type, Accept"
      // );
      console.log(ctx.params);

      const theParam = ctx.params.obj.toString();

      AccountsDB.loadDatabase({}, function () {
        let _collection = AccountsDB.getCollection(theParam);

        if (!_collection) {
          console.log(
            "Collection %s does not exist. Creating ... 🎮",
            theParam
          );
          _collection = AccountsDB.addCollection(theParam);
        }
        else {
          console.log("collection exists");
        }

        retData = _collection.find();

        console.log(retData);

        apiDataDB = retData;
      })

      let respObj = Object.assign({}, apiDataDB);

      let respArr = convertObj.toArray(respObj);

      ctx.response.body = respArr;
    });

    router.get('/api/1/updateorg/date/:paydate/name/:orgname', async ctx => {

      console.log(ctx.req.url);
      console.log("description: " + ctx.params.desc);

      let umbrella = "orgs";

      AccountsDB.loadDatabase({}, function () {
        let _collection = AccountsDB.getCollection(umbrella);

        if (!_collection) {
          console.log(
            "Collection %s does not exist. Creating ... 🎮",
            umbrella
          );
          _collection = AccountsDB.addCollection(umbrella);
        }

        _collection.insertOne({
          orgName: ctx.params.orgname,
          date: ctx.params.paydate,
          locator: Math.floor(Math.random() * locatorScale + 1)
        });

        console.log("saving tax data");

        AccountsDB.saveDatabase();
      })
      ctx.response.body = Object.assign({}, { "update": "orgname", "success": "ok" });
    })

    var apiDataOrgs = {};

    router.get('/api/1/getorgs/limit/:limit', async ctx => {
      console.log(ctx.req.url);
      console.log("description: " + ctx.params.desc);

      let umbrella = "orgs";

      let retData = {};

      AccountsDB.loadDatabase({}, function () {
        let _collection = AccountsDB.getCollection(umbrella);

        if (!_collection) {
          console.log(
            "Collection %s does not exist. Creating ... 🎮",
            umbrella
          );
          _collection = AccountsDB.addCollection(umbrella);
        }
        else {
          console.log("collection exists");
        }

        retData = _collection.find();

        console.log(retData);

        apiDataOrgs = retData;
      })

      let respObj = Object.assign({}, apiDataOrgs);

      let respArr = convertObj.toArray(respObj);

      respArr.reverse();

      ctx.response.body = respArr;
    })


    router.get('*', async ctx => {
      await handle(ctx.req, ctx.res)
      ctx.respond = false
    });

    server.use(async (ctx, next) => {
      ctx.res.statusCode = 200
      await next()
    });

    server.use(router.routes())
    server.listen(port, () => {
      console.log(`> Ready on http://localhost:${port}`)
    });
  });
