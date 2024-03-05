const Video = require("../models/Video")

module.exports.addVideo=async(req,res)=>{

   try {
    req.body.thumbail =process.env.IMAGE_PATH+req.file?.filename
    let Data =new Video(req.body)
    // console.log(req.body);
    await Data.save()
    return res.status(200).json({
        success:true,
        message:"Video Data is added",
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

module.exports.getVideo=async(req,res)=>{
    try {
           const List = await Video.find()
           
           if(List){
                return res.status(200).json({
                    success:true,
                    message:"Data Found Successfully",
                    Data:List
                })
           }else{
            return res.status(404).json({
                success:false,
                message:"no record Found",
                Data:[]
            })
           }
        
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"internal server error",
            Data:[]
        })
    }
}

module.exports.updateVideo = async (req, res) => {
    try {

        let obj = {
            url: req.body.url,
            title: req.body.title,
            description: req.body.description,
            thumbail: process.env.Image_path+req.file?.filename
        }
        if(!req.body.title){
            delete obj.title;
        }

        let filter = {_id:req.params.id }
      

        let productUpdate = await Video.findOneAndUpdate(filter,obj, {
            returnOriginal: false,
        });

        // let productUpdate = await  Video.updateOne({_id:req.params.id},{$set:{obj}})
        //    console.log("productUpdate",productUpdate);
        return res.status(200).json({
            success: true,
            message: "record updated successfully",
            data:productUpdate
        })



    } catch (err) {
        return res.status(500).json({
            success: false,
            message: err.message,
            data: []
        })
    }
}

module.exports.deleteVideo = async(req,res)=>{
    try {
        await Video.deleteOne({ _id: req.params.id })
        return res.status(200).json({
            success:true,
            message:"Record delete successfully",
            Data:[]
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
            data: []
        })
        
    }


}
