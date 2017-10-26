var express = require('express');
var router = express.Router();
var db = require('../queries');


router.get('/api/questions', db.getAllQuestions);
router.get('/api/questions/:id', db.getSingleQuestion);
router.post('/api/questions', db.createQuestion);
router.put('/api/questions/:id', db.updateQuestion);
router.delete('/api/questions/:id', db.removeQuestion);

// application -------------------------------------------------------------
router.get('/', function (req, res) {

    res.render('index', {title: 'node-postgres-promises'}); // load the single view file (angular will handle the page changes on the front-end)
});

module.exports = router;
