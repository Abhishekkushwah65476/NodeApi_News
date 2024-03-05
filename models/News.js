const mongoose = require("mongoose")

const newsSchema = new mongoose.Schema({


   title:{
    type:String,
    required:true
   },

   sub_title:{
   type:String,
   requied:true
   },
   
   category_id:{
    type:mongoose.Schema.ObjectId,
    ref:"categories"
   },
   subcategory_id:{
    type:mongoose.Schema.ObjectId,
    ref:"subcategories"
   },
   description:{
   type:String,
   required:true
   },

   sort_description:{
    type:String,
    required:true
   },

  slug:{
    type:String,
    required:true
  },

  Show_in_slider:{
    type:Boolean,
    required:true
  },
  tranding_news:{
    type:Boolean,
    required:true
  },
  latest_news:{
    type:Boolean,
    required:true
  },
  thumbail:{
    type:String,
    required:true
  },
  status:{
    type:String,
    enum:["Active","Inactive"],
    default:"Active"
  }

})

module.exports=mongoose.model("News",newsSchema)