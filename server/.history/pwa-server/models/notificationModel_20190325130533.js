var mongoose=require("mongoose");
var Schema=mongoose.Types.Schema;
var browerDetails=new Schema({
      userName:{
          type:Str
      },
      userId:"",
      endpoint:"",
      expirationTime:""
      keys:{
        auth:
        p256dh
      }
     

})