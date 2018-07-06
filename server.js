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
    //  await app.render(ctx.req, ctx.res, '/a', ctx.query)
    console.log(ctx.req.url);
    //  ctx.respond = false;
  })

  router.get('/api/1/addexpense/amount/:total/date/:paydate/payee/:payee/description/:desc/notes/:notes/org/:org/apid/:arid', async ctx => {
    //  await app.render(ctx.req, ctx.res, '/a', ctx.query)
    console.log(ctx.req.url);
    console.log("description: " + ctx.params.desc);

    let umbrella = "expenses";

    AccountsDB.loadDatabase({}, function() {
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

  //  return Object.assign({}, {"success": "ok"});
    })
    ctx.response.body = Object.assign({}, {"update": "expenses", "success": "ok"});
    
    //  ctx.respond = false;
  })

  router.get('/api/1/addrevenue/amount/:total/date/:paydate/payer/:payer/description/:desc/notes/:notes/org/:org/arid/:arid', async ctx => {
    //  await app.render(ctx.req, ctx.res, '/a', ctx.query)
    console.log(ctx.req.url);
    console.log("description: " + ctx.params.desc);
    console.log("payer: " + ctx.params.payer);

    let umbrella = "revenues";

    AccountsDB.loadDatabase({}, function() {
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
        accountsreceivableid: ctx.params.arid
      });

      console.log("saving revenue data");

      AccountsDB.saveDatabase();

  //  return Object.assign({}, {"success": "ok"});
    })
    ctx.response.body = Object.assign({}, {"update": "revenues", "success": "ok"});
    
    //  ctx.respond = false;
  })

  var apiData = {};

  router.get('/api/1/getrevenue/org/:org/limit/:limit', async ctx => {
    //  await app.render(ctx.req, ctx.res, '/a', ctx.query)
    console.log(ctx.req.url);
    console.log("description: " + ctx.params.desc);

    let umbrella = "revenues";

    let retData = {};

    AccountsDB.loadDatabase({}, function() {
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

  //  ctx.response.body = Object.assign({}, apiData);

    let respObj = Object.assign({}, apiData);
    
    let respArr = convertObj.toArray(respObj);

    ctx.response.body = respArr;
  })

  router.get('/api/1/getexpenses/org/:org/limit/:limit', async ctx => {
    //  await app.render(ctx.req, ctx.res, '/a', ctx.query)
    console.log(ctx.req.url);
    console.log("description: " + ctx.params.desc);

    let umbrella = "expenses";

    let retData = {};

    AccountsDB.loadDatabase({}, function() {
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

  router.get('/api/1/getpayables/org/:org/limit/:limit', async ctx => {
    //  await app.render(ctx.req, ctx.res, '/a', ctx.query)
    console.log(ctx.req.url);
    console.log("description: " + ctx.params.desc);

    let umbrella = "payables";

    let retData = {};

    AccountsDB.loadDatabase({}, function() {
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

  router.get('/api/1/getreceivables/org/:org/limit/:limit', async ctx => {
    //  await app.render(ctx.req, ctx.res, '/a', ctx.query)
    console.log(ctx.req.url);
    console.log("description: " + ctx.params.desc);

    let umbrella = "receivables";

    let retData = {};

    AccountsDB.loadDatabase({}, function() {
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

  router.get('/api/1/addtime/amount/:total/date/:paydate/client/:dest/description/:desc/notes/:notes/org/:org/rate/:rate', async ctx => {
    //  await app.render(ctx.req, ctx.res, '/a', ctx.query)
    console.log(ctx.req.url);
    console.log("description: " + ctx.params.desc);
    console.log("time: " + ctx.params.total);

    let umbrella = "timesheet";

    AccountsDB.loadDatabase({}, function() {
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
        client: ctx.params.dest,
        description: ctx.params.desc,
        notes: ctx.params.notes,
        rate: ctx.params.rate,
        org: ctx.params.org
      });

      console.log("saving time data");

      AccountsDB.saveDatabase();
      
    })
    ctx.response.body = Object.assign({}, {"update": "time", "success": "ok"});

  })

  router.get('/api/1/addmiles/amount/:total/date/:paydate/destination/:dest/embarkment/:emb/description/:desc/roundtrip/:round/notes/:notes/org/:org', async ctx => {
    //  await app.render(ctx.req, ctx.res, '/a', ctx.query)
    console.log(ctx.req.url);
    console.log("description: " + ctx.params.desc);
    console.log("miles: " + ctx.params.total);

    let umbrella = "miles";

    AccountsDB.loadDatabase({}, function() {
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
        org: ctx.params.org
      });

      console.log("saving revenue data");

      AccountsDB.saveDatabase();

  //  return Object.assign({}, {"success": "ok"});
    })
    ctx.response.body = Object.assign({}, {"update": "miles", "success": "ok"});
    
    //  ctx.respond = false;
  })

  router.get('/api/1/getmiles/org/:org/limit/:limit', async ctx => {
    //  await app.render(ctx.req, ctx.res, '/a', ctx.query)
    console.log(ctx.req.url);
    console.log("description: " + ctx.params.desc);

    let umbrella = "miles";

    let retData = {};

    AccountsDB.loadDatabase({}, function() {
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

  router.get('/api/1/gettime/org/:org/limit/:limit', async ctx => {
    //  await app.render(ctx.req, ctx.res, '/a', ctx.query)
    console.log(ctx.req.url);
    console.log("description: " + ctx.params.desc);

    let umbrella = "timesheet";

    let retData = {};

    AccountsDB.loadDatabase({}, function() {
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

  router.get('/api/1/addreceivable/amount/:total/date/:paydate/payee/:payee/description/:desc/notes/:notes/org/:org', async ctx => {
    //  await app.render(ctx.req, ctx.res, '/a', ctx.query)
    console.log(ctx.req.url);
    console.log("description: " + ctx.params.desc);

    let umbrella = "receivables";

    AccountsDB.loadDatabase({}, function() {
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
        org: ctx.params.org
      });

      console.log("saving expense data");

      AccountsDB.saveDatabase();

  //  return Object.assign({}, {"success": "ok"});
    })
    ctx.response.body = Object.assign({}, {"update": "receivables", "success": "ok"});
    
    //  ctx.respond = false;
  })

  router.get('/api/1/addinvoice/amount/:total/date/:paydate/payee/:payee/description/:desc/notes/:notes/org/:org/arid/:arid', async ctx => {
    //  await app.render(ctx.req, ctx.res, '/a', ctx.query)
    console.log(ctx.req.url);
    console.log("description: " + ctx.params.desc);

    let umbrella = "invoices";

    AccountsDB.loadDatabase({}, function() {
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
        arid: ctx.params.arid
      });

      console.log("saving invoice data");

      AccountsDB.saveDatabase();

  //  return Object.assign({}, {"success": "ok"});
    })
    ctx.response.body = Object.assign({}, {"update": "invoices", "success": "ok"});
    
    //  ctx.respond = false;
  })

  router.get('/api/1/addpayable/amount/:total/date/:paydate/payee/:payee/description/:desc/notes/:notes/org/:org', async ctx => {
    //  await app.render(ctx.req, ctx.res, '/a', ctx.query)
    console.log(ctx.req.url);
    console.log("description: " + ctx.params.desc);

    let umbrella = "payables";

    AccountsDB.loadDatabase({}, function() {
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
        org: ctx.params.org
      });

      console.log("saving expense data");

      AccountsDB.saveDatabase();

  //  return Object.assign({}, {"success": "ok"});
    })
    ctx.response.body = Object.assign({}, {"update": "payables", "success": "ok"});
    
    //  ctx.respond = false;
  })

  router.get('*', async ctx => {
    await handle(ctx.req, ctx.res)
    ctx.respond = false
  })

  server.use(async (ctx, next) => {
    ctx.res.statusCode = 200
    await next()
  })

  server.use(router.routes())
  server.listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`)
  })
})
