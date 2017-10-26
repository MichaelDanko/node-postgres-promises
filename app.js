const restify = require('restify'),
  { Client } = require('pg'),
  server = restify.createServer(),
  gets = require('./apis/gets.js'),
  posts = require('./apis/posts.js')

require('dotenv').config()

const client = new Client({
  connectionString: process.env.DATABASE_URL
})

client.connect()

server.listen(process.env.port || process.env.PORT || 5000, () => {
  console.log(server.name, "+++", server.url)
})

gets(server, client)
posts(server, client)
