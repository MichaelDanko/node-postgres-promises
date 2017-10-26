const insertQuestion = require('./db/insertQuestion.js')

function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
}

function posts(server, client) {

  //do submit upvote api

  server.post('/api/answerQuestion', (req, res, next) =>{
    let questionId = req.body.questionId,
      answer = req.body.answer,
      answerId = guid()

      client.query(`
          INSERT INTO ANSWERS (ANSWER_ID, ANSWER)
          VALUES ('${answerId}', '${answer}');

          INSERT INTO QUESTIONS_TO_ANSWERS (QUEST_ID, ANSWER_ID)
          VALUES ('${questionId}', '${answerId}');
        `, (err, resp) => {
            if (err) throw err
            console.log(resp.rows)
            res.send('Inserted Correctly')
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
