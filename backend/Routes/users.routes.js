const express=require("express");
const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
const {UserModel}=require("../Model/users.model")
const usersRoutes=express.Router()

usersRoutes.get("/",async(req,res)=>{
 const user=await UserModel.find();
 res.send(user)
// res.send("users homepage")
})

usersRoutes.post("/signup",async(req,res)=>{
    const {name,email,password}=req.body;
    bcrypt.hash(password, 4, async function(err, hash) {
        const user=new UserModel({name,email,password:hash})
        await user.save()
        res.send("sign up successful")
    });
    
   
})


module.exports={usersRoutes}