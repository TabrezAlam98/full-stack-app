const fs=require("fs");
const express=require("express")
const app=express();

app.get("/",(req,res)=>{
    res.send("this is home page")
})

app.listen(8500,()=>{
    console.log("listening on port 8500")
})