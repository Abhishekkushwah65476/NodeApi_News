const mongoose =require("mongoose")

const registrationSchema = new mongoose.Schema({
    User_id:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    Email_id:{
        type:String,
        required:true
    },
    Phone_number:{
        type:Number,
        required:true
    },
    password:{
      type:String,
      required:true
    },
    confirm_password:{
        type:String,
    },
    role:{
        type:Number,//one for user two for repoter three for admin
        enum:[1,2,3],
        default:1
    }
})
module.exports = mongoose.model("Registration",registrationSchema)