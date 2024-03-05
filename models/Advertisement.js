const mongoose = require("mongoose")

const adSchema = new mongoose.Schema({
    Adtype:{
        type:String,
        enum:["image","video"],
        default:'image'
    },
    Content_upload:{
     type:String,
     required:true
    },
    Start_date:{
        type:Date
    },
    End_date:{
        type:Date
    },
    amount:{
         type:Number,
         required:true
    },
    Custumer_name:{
        type:String,
        required:true
    },
    Phone:{
        type:Number,
        required:true
    },
   position:{
    type:String,
    enum:["top","left","right","bottom"],
    default:"top"
   },
   page:{
    type:String,
    required:true,
   },
   url:{
    type:String,
    required:true
   },
    Status:{
        type:String,
        enum:["Active","Inactive"],
        default:"Active"
    }
})


module.exports=mongoose.model("Advertisement",adSchema)