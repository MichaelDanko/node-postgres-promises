const insertQuestion = require('./db/insertQuestion.js')

function posts(server, client) {

  //do submit upvote api

  server.post('/api/answerQuestion', (req, res, next) =>{
    let questionId = req.body.questionId,
      answerId = req.body.answerId,
      answer = req.body.answer

      client.query(`
          INSERT INTO ANSWERS (ANSWER_ID, ANSWER)
          VALUES ('${answerId}', '${answer}');

          INSERT INTO QUESTIONS_TO_ANSWERS (QUEST_ID, ANSWER_ID)
          VALUES ('${questionId}', '${answerId}');
        `, (err, resp) => {
        if (err) throw err
        console.log(resp.rows)
        res.send(resp.rows)
      })
  })

  server.post('/api/insertQuestion', (req, res, next) => {
    let question = req.body.question,
      entity = req.body.entity,
      userId = req.body.userId

    insertQuestion(client, question, entity, userId, res)

    return next()
  })
}

module.exports = posts;
