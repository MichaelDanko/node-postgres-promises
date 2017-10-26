const insertQuestion = require('./db/insertQuestion.js')

function posts(server, client) {

  server.post('/api/insertQuestion', (req, res, next) => {
    let question = req.body.question,
      entity = req.body.entity,
      userId = req.body.userId
    
    insertQuestion(client, question, entity, userId, res)

    return next()
  })
}

module.exports = posts;
