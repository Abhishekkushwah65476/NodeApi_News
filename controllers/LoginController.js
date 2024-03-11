// const login = require("../models/login")
const User = require("../models/Registration")
const bcrypt =require("bcrypt")
const jwt = require("jsonwebtoken")

module.exports.addLogin=async(req,res)=>{
    try {

        console.log(req.body);
        // let Data = new login(req.body)
        let UserData = await User.findOne({Email_id:req.body.Email_id})
        // console.log("Userdata",UserData);
        if(!UserData){
            return res.status(404).json({
                success:false,
                message:"user does not exists",
                Data:[]
            })
        }else{
               
            console.log(UserData);
            let passwordChecking = await bcrypt.compare(req.body.password,UserData.password)
            // console.log(UserData.password);
            if(!passwordChecking){
                return res.status(461).json({
                    success:false,
                    message:"password is incorrect",
                })
            }else{
                const token =  jwt.sign({Email:UserData.Email_id,id:UserData._id},process.env.securitykey,{expiresIn:"24hr"})
                obj={
                  Email:UserData.Email_id,
                  token:token
                }
    
                return res.status(200).json({
                    success:true,
                    message:"Login Successfully",
                    Data:obj
                })
    
            }
        }

        
        // await Data.save()
    //    console.log(token);



        
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:error.message,
            Data:[]
        })
        
    }

}

module.exports.getLogin=async(req,res)=>{
    try {
        let List = await login.find()
        if(List){
            return res.status(200).json({
                success:true,
                message:"Data get Successfully",
                Data:List
            })
        }else{
            return res.status(404).json({
                success:false,
                message:"Internal Server error",
                Data:[]
            })
        }
        
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:error.message,
            Data:[]
        })
        
    }
}