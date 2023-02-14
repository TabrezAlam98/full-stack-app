const mongoose=require("mongoose");

const notesSchema=mongoose.Schema({
    name:String,
    price:Number
})

const NotesModel=mongoose.model("notes",notesSchema)

module.exports={NotesModel}