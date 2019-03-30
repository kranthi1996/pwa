var mongoose=require("mongoose");
var Schema=mongoose.Schema;
var ObjectId=mongoose.Schema.Types.ObjectId;
var browerDetails=new Schema({
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
});
module.exports=