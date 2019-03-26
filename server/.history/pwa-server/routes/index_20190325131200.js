var express = require('express');
var router = express.Router();
var notificationModel=require("../models/notificationModel.js")

router.post('/',async function(req, res, next) {
  var {endpoint,expirationTime,keys}=req.body;
  var notificationModel=new notificationModel({
    userName:{
      type:String
  },
  userId:{
    type:String
  },
  endpoint:{
    type:String
  },
  expirationTime:{
    type:String
  },
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
