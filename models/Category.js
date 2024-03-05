const mongoose = require("mongoose")

const categorySchema = new mongoose.Schema({

   title:{
    type:String,
    required:true
   },
  slug:{
    type:String,
    required:true
  },
 
  status:{
    type:String,
    enum:["Active","Inactive"],
    default:"Active"
  }
})

module.exports=mongoose.model("Category",categorySchema)