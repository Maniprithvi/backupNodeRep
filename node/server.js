const express = require('express')
const app = express();
const port = 5000
// const jwt = 


const posts= [
    {
        username:'mani',
        title:'post'
    },
    {
        username:'kiru',
        title:'post 2'
    },
    {
        username:'jothi',
        title:'post 3'
    }
]
app.get('/post',(req,res)=>{
    res.json(posts)
   
})
app.get('/login',(req,res)=>{
    // auth user

})








app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
})
console.log("hello");