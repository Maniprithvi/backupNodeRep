require("dotenv").config
const express = require("express");
const mongoose = require("mongoose")
const app = express();
const port = 3000
const route = require("./route/route")
const URI = process.env.MONGO

app.use(express.json());

app.use("/user",route)

mongoose.connect(URI);
const dbConnect = mongoose.connection;
dbConnect.on("error",(err)=>{
    console.log(err);
})
dbConnect.on("connected",()=>{
    console.log("succesfully connected");
})



app.listen(port,()=>{
    console.log("server is listening");
})