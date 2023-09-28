const express = require('express');
const app = express()
const bcrypt = require("bcrypt")
const passport = require('passport');
 
const initializedPassport = require("./passward-cofig");            
 
initializedPassport(passport)
const users=[];

app.set('view-engine',"ejs")
app.use(express.urlencoded({extended:false}))

app.get('/',(req,res)=>{
res.status(200).render('index.ejs',{name : "mani"}) 
})

app.get('/login',(req,res)=>{
    res.status(200).render('login.ejs')
})
app.post("/login",(req,res)=>{

})
app.get('/register',(req,res)=>{
    res.status(200).render('register.ejs')
})

app.post("/register",async(req,res)=>{
    try {
        const hashPassward = await bcrypt.hash(req.body.passward,10);
        users.push({
            id:Date.now().toString(),
            name:req.body.name,
            email : req.body.email,
            passwad: hashPassward
        })
        res.redirect('/login');
    } catch (error) {
        res.redirect('/register')
    }
  console.log(users);
    
})


app.listen(4000,()=>
{
    console.log('haii ');
}
)