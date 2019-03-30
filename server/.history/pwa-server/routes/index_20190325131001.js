var express = require('express');
var router = express.Router();
var notificationModel=require("../models/notificationModel.js")

router.post('/', function(req, res, next) {
     notificationModel.save()
});

module.exports = router;
