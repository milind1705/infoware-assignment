const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

//SignUp for admin
module.exports.signUp = (req, res) => {
  const { name, email, mobile, password } = req.body;
  //validating fields
  if (!name || !email || !mobile || !password) {
    return res.status(400).json("All fields are Mandetory.");
  }
  User.findOne({ email: email }).then((user) => {
    if (user) {
      return res.status(400).json("This email is already registered.");
    }
    //assign hash password
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(password, salt, (err, hash) => {
        const newUser = new User({
          name: name,
          email: email,
          moble: mobile,
          password: hash,
        });
        newUser
          .save()
          .then((user) => {
            return res.status(200).json({
              message: "User SignUp succsessfully, Login Now",
            });
          })
          .catch((err) => {
            return res.status(400).json({
              message: err.message || "something went wrong",
            });
          });
      });
    });
  });
};

module.exports.login = (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json("Please enter all the fields");
  }

  User.findOne({ email: email }).then((user) => {
    if (!user) {
      return res.status(400).json("You are not registered with us");
    }
    // validate password
    bcrypt.compare(password, user.password).then((isMatch) => {
      if (!isMatch) {
        return res.status(400).json("Password is incorrect");
      }
      //assign token for authantication
      jwt.sign(
        { _id: user._id },
        process.env.SECRETE2,
        { expiresIn: 3600 },
        (err, token) => {
          if (err) throw err;
          return res.status(200).json({
            token: token,
            user: { name: user.name, email: user.email },
          });
        }
      );
    });
  });
};
