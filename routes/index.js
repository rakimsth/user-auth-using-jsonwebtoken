var express = require('express');
var router = express.Router();

var apiRouter = require('./api');
var uiRouter = require('./ui');

/* GET home page. */
router.use('/api/v1', apiRouter);
router.use('/', uiRouter);

module.exports = router;
