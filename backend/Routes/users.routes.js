const express=require("express");
const { model } = require("mongoose");
const {UserModel}=require("../Model/users.model")
const usersRoutes=express.Router()

usersRoutes.get("/",(req,res)=>{
res.send("users homepage")
})


module.exports={usersRoutes}