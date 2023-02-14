const  express=require("express")
const { UserModel } = require("../Model/notes.model")
const notesRoutes=express.Router()

notesRoutes.get("/", async (req, res) => {
    const data = await UserModel.find();
    res.send(data);
  });
  
  notesRoutes.post("/post", async (req, res) => {
    const data = req.body;
    const result = new UserModel(data);
    await result.save();
    res.send(result);
  });
  
  notesRoutes.delete("/del/:id",async(req,res)=>{
      const id=req.params.id;
      await UserModel.findByIdAndDelete({_id:id})
      res.send("deleted")
  })
  
  notesRoutes.put("/update/:id",async(req,res)=>{
      const id=req.params.id;
      const update=req.body;
      await UserModel.findByIdAndUpdate({_id:id},update)
      res.send("updated ")
  })
module.exports={notesRoutes}
