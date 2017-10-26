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
                   FROM QUESTIONS q
                   LEFT JOIN
                     USER_TO_QUESTION uq
                   ON q.QUEST_ID = uq.QUEST_ID;
                 `
                 , (err, resp) => {
                     if (err) throw err
                     console.log(resp.rows)
                     res.send(resp.rows)
                     client.end()
                   }
     )

     return next()
   })
}

module.exports = gets;
