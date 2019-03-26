var mongoose=require("mongoose");
var Schema=mongoose.Schema;
var ObjectId=mongoose.Schema.T;
var browerDetails=new Schema({
      userName:{
          type:String
      },
      userId:"",
      endpoint:"",
      expirationTime:"",
      keys:{
        auth:{
            type:String
        },
        p256dh:{
            type:String
        }
      }
     

})