const { authenticate } = require('passport')
const dcrypt = require("dcrypt")

const localStrategy = require('passport-local').Strategy



function initialize(passport){
    const authenticateUser =(email,passward, done)=>{
        const user = getUserByEmail(email)
        if(user == null){
            return done(null,false,{message:'Incorrect email or password'})
        }try {
            
        } catch (error) {
            
        }

    }
    passport.use(new localStrategy({usernameField: 'email'},authenticateUser))
    passport.serializerUser((user,done)=>{ })
    passport.deserializerUser((id,done)=>{ })

}