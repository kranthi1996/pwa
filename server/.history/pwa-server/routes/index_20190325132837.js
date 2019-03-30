var express = require('express');
var router = express.Router();
var notificationModel=require("../models/notificationModel.js")

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
router.get()

module.exports = router;
