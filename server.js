const Koa = require('koa');
const next = require('next');
const Router = require('koa-router');

const port = parseInt(process.env.PORT, 10) || 3005;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const loki = require("lokijs");
var AccountsDB = new loki(__dirname + "/db/accountsdb.json");

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

  router.get('/api/1/addexpense/amount/:total/date/:paydate/payee/:payee/description/:desc/notes/:notes/org/:org', async ctx => {
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
        org: ctx.params.org
      });

      console.log("saving expense data");

      AccountsDB.saveDatabase();

  //  return Object.assign({}, {"success": "ok"});
    })
    ctx.response.body = Object.assign({}, {"update": "expenses", "success": "ok"});
    
    //  ctx.respond = false;
  })

  router.get('/api/1/addrevenue/amount/:total/date/:paydate/payer/:payee/description/:desc/notes/:notes/org/:org', async ctx => {
    //  await app.render(ctx.req, ctx.res, '/a', ctx.query)
    console.log(ctx.req.url);
    console.log("description: " + ctx.params.desc);

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
        org: ctx.params.org
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

    ctx.response.body = Object.assign({}, apiData);
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
