const mongoos =require("mongoose")
const bcrypt = require("bcrypt")

const loginSchema = new mongoos.Schema({

    Email:{
        type:String,
        required:true
    },
    Password:{
        type:String,
        required:true
    }

    
})

module.exports = mongoos.model("Login",loginSchema)