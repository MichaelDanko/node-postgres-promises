const restify = require('restify'),
  plugins = require('restify').plugins,
  { Client } = require('pg'),
  server = restify.createServer(),
  gets = require('./apis/gets.js'),
  posts = require('./apis/posts.js')

require('dotenv').config()

const client = new Client({
  connectionString: process.env.DATABASE_URL
})

client.connect()

server.use(plugins.bodyParser())
server.use(plugins.queryParser())

server.use(
  function crossOrigin(req,res,next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    return next();
  }
)

server.listen(process.env.port || process.env.PORT || 5000, () => {
  console.log(server.name, "+++", server.url)
})

gets(server, client)
posts(server, client)
