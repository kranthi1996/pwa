var express = require('express');
var router = express.Router();
var notificationModel=require("../models/notificationModel.js")
var sendNotification=require('../sendPushNotification');
router.post('/',async function(req, res, next) {
  var {endpoint,expirationTime,keys}=req.body;
  console.log(req.body)
  var details=new notificationModel({
    userName:"kranthi",
  userId:"4a8",
  endpoint:endpoint,
  expirationTim:expirationTime,
  keys:{
    auth:keys.auth,
    p256dh:keys.p256dh
    }
  })
     var data=await details.save();
     console.log(data)
});
router.get('/',async function(req, res, next){
     var data=await sendNotification.IdeaNotification()
})

module.exports = router;
