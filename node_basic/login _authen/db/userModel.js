const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
email:{
  type:String,
  require:[true,"please provide email"],
  unique:[true,"Email Exits"]
},
passward:{
  type:String,
  require:[true,"provide valid passward"],
  unique:false
}
});
module.exports=mongoose.model.users || mongoose.model("user",UserSchema);