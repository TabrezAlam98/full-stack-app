const mongoose=require("mongoose");

const userSchema=mongoose.Schema({
    name:String,
    price:Number
})

const UserModel=mongoose.model("user",userSchema)

module.exports={UserModel}