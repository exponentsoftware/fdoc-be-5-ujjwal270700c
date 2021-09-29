const bcrypt = require("bcryptjs");
const User = require("../models/user.model");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
// Local Strategy
passport.use(
    new LocalStrategy({ usernameField: "email" }, async(email, password, done) => {
      console.log(email,password);
        // Match User
        try {
          let user = await User.findOne({ email: email }).select("+password");
          const checkpassword=await bcrypt.compare(password,user.password);
          if(!checkpassword){
             return res.status(400).json({msg:"Wrong password"})
          }
          if (user) {
              user = user.toJSON();
              if (checkpassword) {
                  console.log("User Authenticated");
                  done(null, user);
              } else {
                  done(null, false);
              }
          } else {
              done(null, false);
          }
      } catch (error) {
          done(error)
      }
    })
);

module.exports = passport;