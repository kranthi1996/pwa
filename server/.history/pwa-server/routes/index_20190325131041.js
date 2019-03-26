var express = require('express');
var router = express.Router();
var notificationModel=require("../models/notificationModel.js")

router.post('/',async function(req, res, next) {
  var {endpoint,expirationTime,}=req.body;
     notificationModel.save()
});

module.exports = router;
