const mongoose = require("mongoose")
require("dotenv").config();


async function dbConnect(){
mongoose.connect(process.env.DB_URL).then(()=>{
  console.log("dbConnected");
}).catch((err)=>{
  console.log("db connection encounted ");
  console.log(err);
})

}

module.exports = dbConnect