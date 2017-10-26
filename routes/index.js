var express = require('express');
var router = express.Router();
var db = require('../queries');


router.get('/api/questions', db.getAllQuestions);
router.get('/api/questions/:id', db.getSinglePuppy);
router.post('/api/questions', db.createPuppy);
router.put('/api/questions/:id', db.updatePuppy);
router.delete('/api/questions/:id', db.removePuppy);

// application -------------------------------------------------------------
router.get('/', function (req, res) {

    res.render('index', {title: 'node-postgres-promises'}); // load the single view file (angular will handle the page changes on the front-end)
});

module.exports = router;
