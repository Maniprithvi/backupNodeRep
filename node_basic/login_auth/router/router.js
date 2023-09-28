const Express = require("express")
const router = Express.Router();
const UserSchema = require("../model/mode")
const bcrypt = require("bcrypt");
const { Long } = require("mongodb");

router.get("/",async (req,res)=>{
    const user = await UserSchema.find();
    res.send(user);
})

router.post("/signin",async(req,res)=>{
    bcrypt.hash(req.body.passward, salt , (err, hash) =>{
        const hashedPassward = "" ;
        if(err){
            console.log(err)
        }
        (hash){
            
             return  hashedPassward = hash;
        }   
    }).then((hashedPassward)=>{
    const user = new UserSchema({
    username : req.body.name,
    email: req.body.email,
    // dob:req.body.dob,
    passward:hashedPassward
    })}
    )
    try {
        const data = await user.save()
    res.send(`successfully registerd ${data.UserSchema.username}`)
        res.json(data)
    } catch (error) {
        res.send(error)
    }


})
router.get("/login",async(req,res)=>{
// try {
//     const reqEmail = req.body.email;
//     const user = await UserSchema.findByEmail(reqEmail);
//     res.json(user);
    
// } catch (error) {
// res.json("error",error)
// }
});
module.exports = router