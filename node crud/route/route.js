const express = require("express")
const route = express.Router()

route.get("/",(req,res)=>{
res.send("haii")
})


module.exports = route