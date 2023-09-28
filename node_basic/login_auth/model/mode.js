const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    username :{
        type:String,
        required:[true,"Please provide a Username"]
    },
    email:{
        type :String,
        require:[true,"please provide email"],
        unique: [true,"email exits"]
    },
    // dob:{
    //     type:Date,
    //     require:[true]
    // },
    passward:{
        type:String,
        require:[true]
    }
    // con_passward:{
    //     type:String,
    //     require:[true],
    //     async function(passward)=>{
    //         passward===con_passward
    //     }
    // }

})
;
module.exports = mongoose.model("UserSchema",UserSchema);