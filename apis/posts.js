const insertQuestion = require('./db/insertQuestion.js')

function posts(server, client) {

  server.post('/api/insertQuestion', (req, res, next) => {
    console.log(req.body)

    let question = req.body.question,
      entity = req.body.entity,
      userId = req.body.userId

    insertQuestion(client, question, entity, userId)

    return next()
  })
}

module.exports = posts;
