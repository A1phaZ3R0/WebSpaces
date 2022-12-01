const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/userDb", {useNewUrlParser: true});
const userSchema = {
   firstname: String,
   lastname: String,
   email: String,
   username: String,
   password: String
};

const User = new mongoose.model("User", userSchema)

app.post("/register", function(req, res){
   const newUser = new User({
      firstname: req.body.fname,
      lastname: req.body.fname,
      email: req.body.email,
      username: req.body.uname,
      password: req.body.password
   })
   newUser.save(function(err){
      if (err) {
         console.log(err);
      } else {
         res.render("index.html")
      }
   })
});


