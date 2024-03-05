const News = require("../models/News")

module.exports.addNews=async(req,res)=>{
    try {
        req.body.thumbail =process.env.IMAGE_PATH+req.file?.filename
        let Data =new News(req.body)
        await Data.save()
        return res.status(200).json({
            success:true,
            message:"record add successfully",
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

module.exports.getNews=async(req,res)=>{
    try {
        let List =await News.find()
        if(List){
            return res.status(200).json({
                success:true,
                message:"record added successfully",
                Data:List
            })
        }else{
            return res.status(404).json({
                success:true,
                message:"record not found",
                Data:[]
            })
        }
        
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"internal server error",
            DATA:[]
        })
        
    }
}

module.exports.updateNews=async(req,res)=>{
    try {
        let obj = {
            title:req.body.title,
            sub_title:req.body.sub_title,
            category_id:req.body.category_id,
            subcategory_id:req.body.subcategory_id,
            slug:req.body.slug,
            description:req.body.description,
            status:req.body.status,
            sort_description:req.body.sort_description,
        }
 
        let filter={_id:req.params.id}
        let productUpdate = await News.findOneAndUpdate(filter, obj, {
            returnOriginal: false,
          });
          return res.status(200).json({
            success:true,
            message:"record updated successfully",
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


module.exports.deleteNews=async(req,res)=>{
    try{
        console.log("req.body Delete= " , req.params.id)
        await News.deleteOne({_id:req.params.id})
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













module.exports.newsDetail=async(req,res)=>{
    try {

        let List =await News.findOne({_id:req.params.id})

        if(List){
            return res.status(200).json({
                success:true,
                message:"record added successfully",
                Data:List
            })
        }else{
            return res.status(404).json({
                success:true,
                message:"record not found",
                Data:[]
            })
        }
        
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"internal server error",
            DATA:[]
        })
        
    }
}

module.exports.newData=async(req,res)=>{
    try {
        const List = await News.find({title:req.body.slug})
        if(List){
            return res.status(200).json({
                success:true,
                message:"record added successfully",
                Data:List
            })
        }else{
            return res.status(404).json({
                success:true,
                message:"record not found",
                Data:[]
            })
        }
        
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"internal server error",
            DATA:[]
        })
    }
}

module.exports.one=async(req,res)=>{
    try {
        const List = await News.find({title:req.params.slug})
        if(List){
            return res.status(200).json({
                success:true,
                message:"record added successfully",
                Data:List
            })
        }else{
            return res.status(404).json({
                success:true,
                message:"record not found",
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

module.exports.Two=async(req,res)=>{
    try {
        console.log("hi",req.body.id);
        const List = await News.findOne({_id:req.body.id})
        if(List){
            return res.status(200).json({
                success:true,
                message:"record added successfully",
                Data:List
            })
        }else{
            return res.status(404).json({
                success:true,
                message:"record not found",
                Data:[]
            })
        }
        
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:message.error,
            Data:[]
        })
        
    }
}


module.exports.Thousand=async(req,res)=>{
    try {
        console.log(req.body);
        const List = await News.find({abhishek:req.body.sort_description})
        if(List){
            return res.status(200).json({
                success:true,
                message:"record added successfully",
                Data:List
            })
        }else{
            return res.status(404).json({
                success:true,
                message:"record not found",
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




