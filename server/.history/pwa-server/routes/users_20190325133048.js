var express = require('express');
var router = express.Router();
var sendNotification=require('../sendPushNotification');
/* GET users listing. */
router.get('/', asnyc function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
