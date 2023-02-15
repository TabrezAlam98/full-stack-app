const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { UserModel } = require("../Model/users.model");
const usersRoutes = express.Router();

usersRoutes.get("/", async (req, res) => {
  const user = await UserModel.find();
  res.send(user);
});

usersRoutes.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;
  const userPresent = await UserModel.findOne({ email });
  if (userPresent) {
    res.send("Try login in, already exist");
  }
  try {
    bcrypt.hash(password, 4, async function (err, hash) {
      const user = new UserModel({ name, email, password: hash });
      await user.save();
      res.send("sign up successful");
    });
  } catch {
    console.log(err);
    res.send("something went wrong plz try again later");
  }
});

usersRoutes.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.find({ email });
    if (user.length > 0) {
      const hashed_password = user[0].password;
      bcrypt.compare(password, hashed_password,  function (err, result) {
        if (result) {
          const token = jwt.sign({ "UserID": user[0]._id }, "hush");
          res.send({ "msg": "Login successful", "token": token });
        } 
        else {
          res.send("login failed");
        }
      });
    } 
    else {
      res.send("login failed");
    }
  } 
  catch {
    res.send("something went wrong, please try again sometime later");
  }
});

module.exports = { usersRoutes };
