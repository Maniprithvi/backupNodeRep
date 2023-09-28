const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const User = require("./db/userModel");

// body parser configuration
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (request, response, next) => {
  response.json({ message: "Hey! This is your server response!" });
  next();
});

app.post("/register", async(req, res) => {
  // const hashpass =
 await bcrypt
    .hash(req.body.passward, 10)
    .then((hashedPassward) => {
      const user = new User({
        email: req.body.email,
        passward: hashedPassward,
      });
       user
        .save()
        .then((result) => {
          res.status(201).send({
            message: "successfully registered",
            result,
          });
        })
        .catch((err) => {
          res.status(501).send({
            message: "sorry can't create account try after sometimes",
            err,
          });
        })
        console.log(user);
    })
    .catch((e) => {
      res.status(500).send("passward not hashed");
      console.log(e);
    });
});
// app.listen(port,()=>{
//   console.log("server listening");
// })

module.exports = app;
