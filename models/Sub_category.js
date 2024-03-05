const mongoose = require("mongoose")

const  sub_categorySchema= new mongoose.Schema({

   title:{
    type:String,
    required:true
   },
  slug:{
    type:String,
    required:true
  },

  category_id:{
   type:mongoose.Schema.ObjectId,
   ref:"categories"
  },

  status:{
    type:String,
    enum:["Active","Inactive"],
    default:"Active"
  }
})

module.exports=mongoose.model("Subcategory",sub_categorySchema)