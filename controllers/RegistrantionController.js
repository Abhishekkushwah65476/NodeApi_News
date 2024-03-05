const registration =require("../models/Registration")
 const bcrypt = require("bcrypt")
 var jwt = require("jsonwebtoken")

module.exports.addregistration=async(req,res)=>{
    try {
        const salt = await bcrypt.genSalt(5)
        req.body.password=await bcrypt.hash(req.body.password,salt)
        
        let Data=new registration(req.body)
        await Data.save()
        res.status(200).json({
            success:true,
            message:"registration Add Successfully",
            Data:Data
        })
        
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:error.message,
            Data:[]
        })
        
    }
}

module.exports.getregistration=async(req,res)=>{
  try {
    const List =await registration.find()
    if(List){
        return res.status(200).json({
            success:"true",
            message:"News Found Successfully",
            List
        })
    }else{
        return res.status(404).json({
            success:false,
            message:"No record Found",
            data:[]
        })
    }
  } catch (error) {
    res.status(500).json({
        success:false,
        message:"internal server error",
        data:[]
     })
    
  }
}

module.exports.updateregistration=async(req,res)=>{
    try {
        let obj = {
            name:req.body.name,
            description:req.body.description,
            status:req.body.status
        }
 
        let filter={_id:req.params.id}
        let productUpdate = await registration.findOneAndUpdate(filter, obj, {
            returnOriginal: false,
          });
          return res.status(200).json({
            success:true,
            message:"record added successfully",
            data:productUpdate
        })
        
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:error.message,
            data:[]
        })
        
    }
}

module.exports.deleteregistration=async(req,res)=>{
    try{
        console.log("req.body Delete= " , req.params.id)
        await registration.deleteOne({_id:req.params.id})
       // let newproduct=new product(req.body);
       // await newproduct.save();
       return res.status(200).json({
           success:true,
           message:"registration deleted successfully",
           data:[]
       })

   }catch(err){
       return res.status(500).json({
           success:false,
           message:err.message,
           data:[]
       })
   }
}