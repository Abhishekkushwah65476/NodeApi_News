const Ad = require("../models/Advertisement")

module.exports.addAd=async(req,res)=>{
    try {

        req.body.Content_upload =process.env.IMAGE_PATH+req.file?.filename
        
        let Data = new Ad(req.body)
        await Data.save()
        return res.status(200).json({
            success:true,
            message:"Record add successfully",
            Data:Data
        })
        
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"Internal server Error",
            Data:[]
        })
        
    }
}

module.exports.getAd=async(req,res)=>{
    try {
        const List = await Ad.find();
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

module.exports.UpdateAd=async(req,res)=>{
    try{
        // console.log("req.body = " , req.body)
       // let newproduct=new product(req.body);
       // await newproduct.save();
       let obj = {
        Adtype:req.body.Adtype,
        Start_date:req.body.Start_date,
        End_date:req.body.End_date,
        amount:req.body.amount,
        Custumer_name:req.body.Custumer_name,
        Phone:req.body.Phone,
        position:req.body.position,
        page:req.body.page,
        url:req.body.url,
        Status:req.body.Status,
        Content_upload:req.body.Content_upload,
       }

       let filter={_id:req.params.id}

       let productUpdate = await Ad.findOneAndUpdate(filter, obj, {
     returnOriginal: false,
   });
       // let productUpdate = await  product.updateOne({_id:req.params.id},{$set:{obj}})
    //    console.log("productUpdate",productUpdate);
       return res.status(200).json({
           success:true,
           message:"record added successfully",
           data:productUpdate
       })



   }catch(err){
       return res.status(500).json({
           success:false,
           message:err.message,
           data:[]
       })
   }
}

module.exports.DeleteAd=async(req,res)=>{
    try{
        console.log("req.body Delete= " , req.params.id)
        await Ad.deleteOne({_id:req.params.id})
       // let newproduct=new product(req.body);
       // await newproduct.save();
       return res.status(200).json({
           success:true,
           message:"News deleted successfully",
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
