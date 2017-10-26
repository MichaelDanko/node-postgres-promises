function posts(server, client) {

  server.post('/api/insertQuestion', (req, res, next) => {
    console.log(req.body)
    return next()
  })
}

module.exports = posts;
