var express = require('express');
var router = express.Router();
var notificationModel=require("../models/notificationModel.js")

router.post('/',async function(req, res, next) {
  var {endpoint,expirationTime,keys}=req.body;
  var notificationModel=new notificationModel({
    userName:"kranthi",
  userId:"4a8",
  endpoint:endpoint,
  expirationTim:expirationTime,
  keys:{
    auth:{
        type:String
    },
    p256dh:{
        type:String
    }
  }
  })
     notificationModel.save()
});

module.exports = router;
