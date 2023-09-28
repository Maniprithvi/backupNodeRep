require("dotenv").config()
const express = require("express");
const mongoose = require("mongoose");
const router = require("./router/router");
const app = express();
const port = process.env.PORT ||3000

app.use(express.json());
app.use("/user",router)

mongoose.connect(process.env.MONGO_URI);
const dbCon = mongoose.connection;
dbCon.on('error',console.error.bind(console,'mongo connection error'));
dbCon.once('open',function(){
    console.log("im conneccted with DB");
})




app.listen(port,()=>{
    console.log("hello from  ",port);
})