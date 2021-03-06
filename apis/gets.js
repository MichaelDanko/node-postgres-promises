function gets(server, client) {

  server.get('/api/helloWorld', (req, res, next) => {
    console.log(req.params)
    res.send('Hello World')
    return next()
  })

  server.get('/api/getAllQuestions/', function(req, res, next) {
    client.query(`
                  SELECT
                      q.QUESTION
                    , uq.USER_ID
                    , q.quest_id
                    , q.ranking
                  FROM QUESTIONS q
                  JOIN
                    USER_TO_QUESTION uq
                  ON q.QUEST_ID = uq.QUEST_ID
                  WHERE  q.QUEST_ID NOT IN (SELECT QUEST_ID FROM QUESTIONS_TO_ANSWERS)
                  ORDER BY q.RANKING desc;
                 `, (err, resp) => {
      if (err) throw err
      console.log(resp.rows)
      res.send(resp.rows)
    })

    return next()
  })

  server.get('/api/getQuestions/:resultsPerPage', function(req, res, next) {

    client.query(`
                 SELECT
                     q.QUESTION
                   , uq.USER_ID
                   , q.quest_id
                 FROM QUESTIONS q
                 JOIN
                   USER_TO_QUESTION uq
                 ON q.QUEST_ID = uq.QUEST_ID
                 WHERE  q.QUEST_ID NOT IN (SELECT QUEST_ID FROM QUESTIONS_TO_ANSWERS)
                 ORDER BY (q.RANKING * (SELECT DATE_PART('day', NOW()::timestamp - q.CREATED_ON::timestamp)))
                 LIMIT ${req.params.resultsPerPage};
               `, (err, resp) => {
      if (err) throw err
      console.log(resp.rows)
      res.send(resp.rows)
      client.end()
    })

    return next()
  })

  server.get('/api/getQuestionsPageX/:pageNum/:resultsPerPage', function(req, res, next) {

    let pageNum = req.params.pageNum
    let resultsPerPage = req.params.resultsPerPage
    client.query(`
                 SELECT
                     q.QUESTION
                   , uq.USER_ID
                   , q.quest_id
                 FROM QUESTIONS q
                 JOIN
                   USER_TO_QUESTION uq
                 ON q.QUEST_ID = uq.QUEST_ID
                 WHERE  q.QUEST_ID NOT IN (SELECT QUEST_ID FROM QUESTIONS_TO_ANSWERS)
                 ORDER BY (q.RANKING * (SELECT DATE_PART('day', NOW()::timestamp - q.CREATED_ON::timestamp)))
                 OFFSET ${pageNum} * ${resultsPerPage}
                 LIMIT ${resultsPerPage};
               `, (err, resp) => {
                    if (err) throw err
                      console.log(resp.rows)
                      res.send(resp.rows)
                    }
    )

    return next()
  })
}

module.exports = gets;
