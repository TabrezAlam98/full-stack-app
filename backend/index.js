const fs = require("fs");
const express = require("express");
const app = express();
app.use(express.json());
const { connection } = require("./config/db");
const { UserModel } = require("./Model/user");

app.get("/", async (req, res) => {
  const data = await UserModel.find();
  res.send(data);
});

app.post("/post", async (req, res) => {
  const data = req.body;
  const result = new UserModel(data);
  await result.save();
  res.send(result);
});

app.delete("/del/:id",async(req,res)=>{
    const id=req.params.id;
    await UserModel.findByIdAndDelete({_id:id})
    res.send("deleted")
})

app.put("/update/:id",async(req,res)=>{
    const id=req.params.id;
    const update=req.body;
    await UserModel.findByIdAndUpdate({_id:id},update)
    res.send("updated ")
})

app.listen(8500, async () => {
  try {
    await connection;
    console.log("connected");
  } catch {
    console.log(err);
    console.log("connected mongodb");
  }
  console.log("listening on port 8500");
});
