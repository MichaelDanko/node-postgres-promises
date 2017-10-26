function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
}

function insertQuestion(client, question, entity = 'No Entity', userId = 'Unknown User') {

  let questId = guid()

  client.query(`
                INSERT INTO QUESTIONS
                (
                    QUEST_ID
                  , QUESTION
                  , ENTITY
                  , RANKING
                )
                VALUES (
                    '${questId}'
                  , '${question}'
                  , '${entity}'
                  , 1
                );

                INSERT INTO USER_TO_QUESTION
                (
                    QUEST_ID
                  , USER_ID
                  , RANKING
                )
                VALUES
                (
                    '${questId}'
                  , '${userId}'
                  , 1
                );
              `, (err, res) => {
    if (err) throw err
    console.log(res)
    client.end()
  })
}

module.exports = insertQuestion
